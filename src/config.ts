import { ok } from "assert";
import core from "@actions/core";
import { join } from "path";

import { createTempPath } from "./utility";

export type Config = {
  commitBranch: string;
  commitMessage: string;
  commitUserEmail: string;
  commitUserName: string;
  fullPath: string;
  path: string;
  prAssignee?: string;
  prBody: string;
  prEnabled: boolean;
  prLabels: string[];
  prReviewUsers: string[];
  prTitle: string;
  prToken?: string;
  syncAuth?: string;
  syncBranch: string;
  syncPath: string;
  syncRepository: string;
  templateVariables: Record<string, string>;
};

export function getConfig(): Config {
  const path = core.getInput("path", { required: false });
  const workspace = process.env.GITHUB_WORKSPACE;
  ok(workspace, "Expected GITHUB_WORKSPACE to be defined");

  return {
    commitBranch: core.getInput("commitBranch", { required: true }),
    commitMessage: core.getInput("commitMessage", { required: true }),
    commitUserEmail: core.getInput("commitUserEmail", { required: true }),
    commitUserName: core.getInput("commitUserName", { required: true }),
    fullPath: join(workspace, path),
    path: path,
    prBody: core.getInput("prBody", { required: false }),
    prEnabled: core.getBooleanInput("prEnabled", { required: true }),
    prLabels: core.getMultilineInput("prLabels", { required: false }),
    prReviewUsers: core.getMultilineInput("prReviewUsers", { required: false }),
    prTitle: core.getInput("prTitle", { required: true }),
    prToken: core.getInput("prToken", { required: false }),
    syncAuth: core.getInput("syncAuth", { required: false }),
    syncBranch: core.getInput("syncBranch", { required: true }),
    syncPath: createTempPath(),
    syncRepository: core.getInput("syncRepository", { required: true }),
    templateVariables: {},
  };
}
