import { getOctokit as upstreamOctokit } from "@actions/github";
import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";

export function getOctokit(token: string) {
  return upstreamOctokit(
    token,
    {
      retry: {
        enabled: true,
      },
      throttle: {
        enabled: true,
        timeout: 1000 * 60 * 20,
      },
    },
    retry,
    throttling,
  );
}
