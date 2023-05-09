import { exec } from "@actions/exec";
import { mkdirP } from "@actions/io";

import { Config } from "./config";

export async function cloneRepository(config: Config): Promise<void> {
  const { syncAuth, syncPath, syncRepository, syncBranch } = config;

  const tempDirectory = await mkdirP(syncPath);
  await exec(
    `git clone https://${syncAuth}@${syncRepository} --branch ${syncBranch} ${syncPath}`
  );
}
