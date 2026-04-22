import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm', 
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    "^@repo/shared$": "<rootDir>/../../packages/shared/src/index.ts",
    // This regex helps resolve internal imports if you use .js extensions in paths
    "^(\\.{1,2}/.*)\\.js$": "$1" 
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
};

export default config;