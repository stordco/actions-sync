import { describe, expect, it } from "vitest";
import { resolve } from "path";

import { readOutput } from "./scripts";

describe.concurrent("scripts", () => {
  it("parses single line output", async () => {
    const fixturePath = resolve(
      __dirname,
      "../test/fixtures/scripts/single-line-output",
    );
    const output = await readOutput(fixturePath);
    expect(output).toEqual({
      keyone: "valueone",
      key_two: "value_two",
      keyThree: "valueThree",
    });
  });

  it("parses quoted string output", async () => {
    const fixturePath = resolve(
      __dirname,
      "../test/fixtures/scripts/single-line-quoted-string-output",
    );
    const output = await readOutput(fixturePath);
    expect(output).toEqual({
      keyone: "valueone",
      key_two: "value_two",
      keyThree: "valueThree",
    });
  });

  it("parses multi line heredocs", async () => {
    // NOTE: This trims whitespace due to how we parse and the ugly regex. Should be fine for our use case.
    const fixturePath = resolve(
      __dirname,
      "../test/fixtures/scripts/multi-line-heredoc-output",
    );
    const output = await readOutput(fixturePath);
    expect(output).toEqual({
      keyone: "testing line one\ntesting line two",
      key_two:
        'testing line one\n"testing line two"\nextra empty line after this',
    });
  });
});
