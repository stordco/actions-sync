import * as core from "@actions/core";
import * as glob from "@actions/glob";
import { chmod, open, readFile, stat, writeFile } from "fs/promises";
import { dirname, join, relative } from "path";
import { mkdirP } from "@actions/io";

import { Config } from "./config";
import Handlebars, { DenyRenderError } from "./handlebars";

export async function templateFiles(config: Config): Promise<void> {
  const templateGlob = await glob.create(`${config.syncPath}/templates/*`, {
    matchDirectories: false,
  });
  const templatePaths = await templateGlob.glob();

  core.info(`Templating ${templatePaths.length} files...`);

  for (const templatePath of templatePaths) {
    const relativePath = relative(`${config.syncPath}/templates`, templatePath);
    core.info(`Template ${relativePath}`);

    try {
      const templateStats = await stat(templatePath);
      const templateData = await readFile(templatePath, "utf8");
      const templateHandlebar = Handlebars.compile(templateData);
      const fileData = templateHandlebar(config.templateVariables);

      core.debug(fileData);

      const writePath = join(config.fullPath, relativePath);
      core.debug(`Writing: ${writePath}`);

      await mkdirP(dirname(writePath));
      const io = await open(writePath, "a");
      await io.close();
      await writeFile(writePath, fileData);
      await chmod(
        writePath,
        "0" + (templateStats.mode & parseInt("777", 8)).toString(8),
      );

      core.debug("File written.");
    } catch (err) {
      if (err instanceof DenyRenderError) {
        core.debug(`denyRender was called for ${relativePath}`);
      } else {
        core.error(`Error templating ${relativePath}: ${err}`);
      }
    }
  }
}
