import { readFile, mkdtemp, rm } from "fs/promises";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import Handlebars from "./handlebars";

describe.concurrent("handlebars", () => {
  it("can use an or helper function", async (ctx) => {
    const template = Handlebars.compile(
      "{{#or KEY_ONE KEY_TWO KEY_THREE}}helpers: true{{else}}helpers: false{{/or}}",
    );
    const result = template({
      KEY_ONE: "false",
      KEY_TWO: "false",
      KEY_THREE: "true",
    });

    expect(result).toEqual("helpers: true");
  });

  it("can use an or helper inverse function", async (ctx) => {
    const template = Handlebars.compile(
      "{{#or KEY_ONE KEY_TWO KEY_THREE}}helpers: true{{else}}helpers: false{{/or}}",
    );
    const result = template({
      KEY_ONE: undefined,
      KEY_TWO: undefined,
      KEY_THREE: undefined,
    });

    expect(result).toEqual("helpers: false");
  });
});