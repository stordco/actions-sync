import core from "@actions/core";
import { exec } from "@actions/exec";
import glob from "@actions/glob";
import { relative } from "path";
import { readFile, utimes } from "fs/promises";

import { Config } from "./config";
import { createTempPath } from "./utility";
import { rmRF } from "@actions/io";

const LINE_REGEX =
  /(?:^)([\w.-]+)=(?:<<([\w.-]+)\n([\s\S]*)\n\2)?(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:$|$)/gm;

export async function runScripts(config: Config): Promise<void> {
  const scriptGlob = await glob.create(`${config.syncPath}/scripts/*`);
  const scriptPathsUnsorted = await scriptGlob.glob();
  const scriptPaths = scriptPathsUnsorted.sort();

  core.info(`Running ${scriptPaths.length} scripts...`);

  for (const scriptPath of scriptPaths) {
    core.startGroup(`Run ${relative(config.syncPath, scriptPath)}`);

    const newTemplateVariables = await runScript(scriptPath, config);
    core.debug(
      "Adding new template variables\n" +
        JSON.stringify(newTemplateVariables, null, 2)
    );
    config.templateVariables = {
      ...config.templateVariables,
      ...newTemplateVariables,
    };

    core.endGroup();
  }
}

export async function runScript(
  scriptPath: string,
  config: Config
): Promise<Record<string, string>> {
  const outputFilePath = createTempPath();
  await utimes(outputFilePath, new Date(), new Date());

  await exec(scriptPath, [], {
    cwd: config.fullPath,
    env: {
      ...process.env,
      ...config.templateVariables,
      SYNC_BRANCH: config.syncBranch,
      SYNC_PATH: config.syncPath,
      SYNC_REPOSITORY: config.syncRepository,
      TEMPLATE_ENV: outputFilePath,
    },
    silent: false,
    failOnStdErr: false,
    ignoreReturnCode: true,
  });

  const newTemplateVariables = await readOutput(outputFilePath);
  await rmRF(outputFilePath);
  return newTemplateVariables;
}

// Most of the code taken from dotenv and adapted for heredocs to match GitHub Actions output
export async function readOutput(
  path: string
): Promise<Record<string, string>> {
  const result = {} as Record<string, string>;

  const lines = (await readFile(path, "utf8")).replace(/\r\n?/gm, "\n");

  let match;
  while ((match = LINE_REGEX.exec(lines)) != null) {
    const key = match[1];
    const isHeredoc = match[3] != null;

    let value = ((isHeredoc ? match[3] : match[4]) || "").trim();

    if (!isHeredoc) {
      const maybeQuote = value[0];

      value = value.replace(/^(['"`])([\s\S]*)\1$/gm, "$2");

      if (maybeQuote === '"') {
        value = value.replace(/\\n/g, "\n");
        value = value.replace(/\\r/g, "\r");
      }
    }

    result[key] = value;
  }

  return result;
}
