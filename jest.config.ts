import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};
export default config;
