/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.scss$': 'jest-scss-transform',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
  },
  setupFilesAfterEnv: ['./setupTests.ts'],
};
