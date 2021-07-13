module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testMatch: ["**/+(*.)+(spec).+(ts)?(x)"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/**/*.vue",
    "<rootDir>/src/**/**/*.ts",
    "!<rootDir>/src/**/**/main.ts",
    "!<rootDir>/src/**/**/index.ts",
    "!**/node_modules/**",
  ],
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 85,
      lines: 85,
      functions: 85,
    },
  },
};
