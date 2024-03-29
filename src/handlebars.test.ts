import { readFile, mkdtemp, rm } from "fs/promises";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import Handlebars, { DenyRenderError } from "./handlebars";

describe.concurrent("handlebars or", () => {
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

  it("can use an or helper without an else statement", async (ctx) => {
    const template = Handlebars.compile(
      "{{#or POSTGRES_VERSION KAFKA_USAGE}}    services:{{/or}}",
    );
    const result = template({
      POSTGRES_VERSION: "14",
    });

    expect(result).toEqual("    services:");
  });

  it("allows statements in block", async (ctx) => {
    const template = Handlebars.compile(
      "{{#or POSTGRES_VERSION KAFKA_USAGE}}{{#if POSTGRES_VERSION}}POSTGRES{{/if}}{{#if KAFKA_USAGE}}KAFKA{{/if}}{{/or}}",
    );
    const result = template({
      POSTGRES_VERSION: "14",
    });

    expect(result).toEqual("POSTGRES");
  });
});

describe.concurrent("handlebars denyRender", () => {
  it("raises an error when called", async (_ctx) => {
    const template = Handlebars.compile("{{denyRender}}");

    expect(() => template({})).toThrowError(DenyRenderError);
  });

  it("does not raise an error in conditional block", async (_ctx) => {
    const template = Handlebars.compile("{{#if false}}{{denyRender}}{{/if}}");

    expect(() => template({})).not.toThrowError(DenyRenderError);
  });
});
