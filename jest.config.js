/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './',
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  testMatch: ['<rootDir>/**/*.spec.ts'],
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
};
