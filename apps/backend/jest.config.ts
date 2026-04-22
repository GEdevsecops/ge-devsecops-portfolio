export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  // 👇 The "Modern Practice" hook
  setupFiles: ['<rootDir>/jest.setup.ts'], 
  moduleNameMapper: {
    '^@repo/shared$': '<rootDir>/../../packages/shared/src/index.ts',
    // This regex tells Jest: "If you see an import ending in .js, look for the .ts file"
    '^(\\.{1,2}/.*)\\.js$': '$1', 
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
};