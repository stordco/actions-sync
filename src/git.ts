import { ok } from "assert";
import * as core from "@actions/core";
import { exec } from "@actions/exec";
import { getOctokit } from "@actions/github";
import { mkdirP } from "@actions/io";

import { Config } from "./config";

export async function cloneRepository(config: Config): Promise<void> {
  const { syncAuth, syncPath, syncRepository, syncBranch } = config;

  const tempDirectory = await mkdirP(syncPath);
  await exec(
    `git clone https://${syncAuth}@${syncRepository} --branch ${syncBranch} ${syncPath}`,
    [],
    {
      silent: !core.isDebug(),
    }
  );
}

export async function configureRepository(config: Config): Promise<void> {
  await exec("git", ["config", "user.email", config.commitUserEmail], {
    cwd: config.fullPath,
    silent: !core.isDebug(),
  });

  await exec("git", ["config", "user.name", config.commitUserName], {
    cwd: config.fullPath,
    silent: !core.isDebug(),
  });

  await exec("git", ["checkout", "-f", "-b", config.commitBranch], {
    cwd: config.fullPath,
    silent: !core.isDebug(),
  });
}

export async function commitChanges(config: Config): Promise<boolean> {
  const exitCode = await exec("git", ["commit", "--all", "-m", config.commitMessage], {
    cwd: config.fullPath,
    failOnStdErr: false,
    ignoreReturnCode: true,
    silent: !core.isDebug(),
  });

  return exitCode === 0;
}

export async function createPr(config: Config): Promise<void> {
  await exec("git", ["push", "-f", "-u", "origin", config.commitBranch], {
    cwd: config.fullPath,
    silent: !core.isDebug(),
  });

  ok(process.env.GITHUB_REPOSITORY, "Expected GITHUB_REPOSITORY to be defined");
  ok(config.prToken, "Expected PR_TOKEN to be defined");

  const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
  const octokit = getOctokit(config.prToken);

  const { data: repository } = await octokit.rest.repos.get({ owner, repo });

  for (const name of config.prLabels) {
    core.debug(`Creating issue label ${name}`);
    await octokit.rest.issues.createLabel({ owner, repo, name });
  }

  const res = await octokit.rest.pulls.create({
    owner,
    repo,
    base: repository.default_branch,
    body: config.prBody,
    head: config.commitBranch,
    maintainer_can_modify: true,
    title: config.prTitle,
  });

  if (res.status !== 201) {
    throw new Error(`Failed to create PR: ${res.status}`);
  }

  await octokit.rest.issues.addLabels({
    owner,
    repo,
    issue_number: res.data.number,
    labels: config.prLabels,
  });

  await octokit.rest.pulls.requestReviewers({
    owner,
    repo,
    pull_number: res.data.number,
    reviewers: config.prReviewUsers,
  });

  core.setOutput("pr-url", res.data.html_url);
}
