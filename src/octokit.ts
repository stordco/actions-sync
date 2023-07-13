import type { Octokit } from "@octokit/core";
import { getOctokit as upstreamOctokit } from "@actions/github";
import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";

function onLimit(
  retryAfter: number,
  { method, url }: { method: string; url: string },
  octokit: Octokit,
) {
  octokit.log.warn(`Request quota exhausted for request ${method} ${url}`);
  octokit.log.info(`Retrying after ${retryAfter} seconds`);
  return true;
}

export function getOctokit(token: string) {
  return upstreamOctokit(
    token,
    {
      retry: {
        enabled: true,
      },
      throttle: {
        enabled: true,
        onSecondaryRateLimit: onLimit,
        onRateLimit: onLimit,
        timeout: 1000 * 60 * 20,
      },
    },
    retry,
    throttling,
  );
}
