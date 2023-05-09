import core from "@actions/core";
import glob from "@actions/glob";
import { relative } from "path";

import { Config } from "./config";

export async function templateFiles(config: Config): Promise<void> {
  const templateGlob = await glob.create(`${config.syncPath}/templates/*`);
  const templatePaths = await templateGlob.glob();

  core.info(`Templating ${templatePaths.length} files...`);

  for (const templatePath of templatePaths) {
    core.info(`Template ${relative(config.syncPath, templatePath)}`);

    // Template the file
  }
}
