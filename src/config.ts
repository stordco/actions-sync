import { ok } from "assert";
import * as core from "@actions/core";
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
    commitBranch: core.getInput("commit-branch", { required: true }),
    commitMessage: core.getInput("commit-message", { required: true }),
    commitUserEmail: core.getInput("commit-user-email", { required: true }),
    commitUserName: core.getInput("commit-user-name", { required: true }),
    fullPath: join(workspace, path),
    path: path,
    prBody: core.getInput("pr-body", { required: false }),
    prEnabled: core.getBooleanInput("pr-enabled", { required: true }),
    prLabels: core.getMultilineInput("pr-labels", { required: false }),
    prReviewUsers: core.getMultilineInput("pr-review-users", {
      required: false,
    }),
    prTitle: core.getInput("pr-title", { required: true }),
    prToken: core.getInput("pr-token", { required: false }),
    syncAuth: core.getInput("sync-auth", { required: false }),
    syncBranch: core.getInput("sync-branch", { required: true }),
    syncPath: createTempPath(),
    syncRepository: core.getInput("sync-repository", { required: true }),
    templateVariables: {},
  };
}
