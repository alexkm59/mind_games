/** @type {import('ts-jest').JestConfigWithTsJest} */
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
// };
module.exports = {
  preset: 'ts-jest',  
  testEnvironment: "jest-environment-node",
    setupFilesAfterEnv: ["<rootDir>/jest.config.js"],
    transform: {
        "\\.[jt]sx?$": "babel-jest",
    },
}
