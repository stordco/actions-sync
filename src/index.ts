import core from "@actions/core";
import github from "@actions/github";

import { cloneRepository } from "./git";
import { getConfig } from "./config";
import { templateFiles } from "./templates";
import { runScripts } from "./scripts";

export async function run() {
  const config = getConfig();

  await cloneRepository(config);
  await runScripts(config);
  await templateFiles(config);

  // Commit and push changes to sync repository

  // Create PR
}
