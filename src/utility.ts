import { ok } from "assert";
import { join } from "path";
import { v4 as uuid } from "uuid";

export function createTempPath(): string {
  return join(getTempDirectory(), uuid());
}

export function getTempDirectory(): string {
  const tempDirectory = process.env["RUNNER_TEMP"] || "";
  ok(tempDirectory, "Expected RUNNER_TEMP to be defined");
  return tempDirectory;
}
