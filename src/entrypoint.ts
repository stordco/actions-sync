import core from "@actions/core";

import { run } from "./index";

(async () => {
  try {
    await run();
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else if (typeof error === "string") {
      core.setFailed(error);
    } else {
      core.setFailed("Unknown error occurred");
    }

    process.exit(1);
  }
})();
