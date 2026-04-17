module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // This is crucial: it maps your shared package so Jest can find the source
  moduleNameMapper: {
    "^@repo/shared$": "<rootDir>/../../packages/shared/src"
  },
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { useESM: true }]
  }
};