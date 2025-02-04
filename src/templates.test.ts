import { existsSync } from "fs";
import { readFile, mkdtemp, rm, stat } from "fs/promises";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { join, resolve } from "path";
import { tmpdir } from "os";

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

  it<LocalTestContext>("will render a regular markdown file", async (ctx) => {
    await templateFiles(ctx.config);
    const path = join(ctx.config.fullPath, "conditional.md");
    const data = await readFile(path, "utf8");

    expect(data).toEqual(
      `# Conditional Markdown File

This file will only be templated if the \`NO_MARKDOWN\` environment variable is not set. Otherwise, it will be rendered as a normal markdown file.
`,
    );
  });

  it<LocalTestContext>("will not template files if the denyRender helper is called", async (ctx) => {
    await templateFiles({
      ...ctx.config,
      templateVariables: { NO_MARKDOWN: "true" },
    });
    const path = join(ctx.config.fullPath, "conditional.md");
    const fileExists = existsSync(path);
    expect(fileExists).toBe(false);
  });

  it<LocalTestContext>("will use the same file permissions as the template", async (ctx) => {
    await templateFiles(ctx.config);
    const path = join(ctx.config.fullPath, "executable.sh");
    const stats = await stat(path);

    expect(stats.mode.toString(8)).toBe("100755");
  });
});
