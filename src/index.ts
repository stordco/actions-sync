import * as core from "@actions/core";

import {
  configureRepository,
  cloneRepository,
  commitChanges,
  createPr,
} from "./git";
import { getConfig } from "./config";
import { templateFiles } from "./templates";
import { runScripts } from "./scripts";

export async function run() {
  const config = getConfig();

  await configureRepository(config);
  await cloneRepository(config);
  await runScripts(config);
  await templateFiles(config);

  if (config.prEnabled) {
    const hasChanges = await commitChanges(config);

    if (hasChanges === false) {
      core.info("No changes to commit.");
      return;
    }

    core.info("Creating PR");
    await createPr(config);
    core.info("Created PR");
  } else {
    core.info("Skipping PR creation");
  }
}
