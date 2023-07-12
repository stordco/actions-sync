import { readFile, mkdtemp, rm } from "fs/promises";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { join, resolve } from "path";
import { tmpdir } from "os";
import { v4 as uuid } from "uuid";

import { Config } from "./config";
import { templateFiles } from "./templates";

interface LocalTestContext {
  config: Config;
}

describe.concurrent("templates", () => {
  beforeEach<LocalTestContext>(async (ctx) => {
    const fullPath = await mkdtemp(join(tmpdir(), "actions-sync"));

    ctx.config = {
      commitBranch: "main",
      commitMessage: "commit message",
      commitUserEmail: "test@example.com",
      commitUserName: "testing",
      fullPath,
      path: "",
      prAssignee: "",
      prBody: "testing",
      prEnabled: false,
      prLabels: [],
      prReviewUsers: [],
      prTitle: "testing",
      syncAuth: "",
      syncBranch: "main",
      syncPath: resolve(__dirname, "../test/fixtures"),
      syncRepository: "test/test",
      templateVariables: {},
    };
  });

  afterEach<LocalTestContext>(async (ctx) => {
    await rm(ctx.config.fullPath, { recursive: true });
  });

  it<LocalTestContext>("can template basic json files", async (ctx) => {
    await templateFiles(ctx.config);
    const path = join(ctx.config.fullPath, "basic.json");
    const data = await readFile(path, "utf8");

    expect(data).toEqual(
      `{\n  "keyOne": true,\n  "keyThree": "valueThree"\n}\n`,
    );
  });

  it<LocalTestContext>("can use template variables", async (ctx) => {
    await templateFiles({
      ...ctx.config,
      templateVariables: { KEY_TWO: "true" },
    });
    const path = join(ctx.config.fullPath, "basic.json");
    const data = await readFile(path, "utf8");

    expect(data).toEqual(
      `{\n  "keyOne": true,\n  "keyTwo": "valueTwo",\n  "keyThree": "valueThree"\n}\n`,
    );
  });
});
