module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // A path to a module which exports an async function that is triggered once before all test suites
  globalSetup: "./test/global-setup.js",

  // A path to a module which exports an async function that is triggered once after all test suites
  globalTeardown: "./test/global-teardown.js",

  // A preset that is used as a base for Jest's configuration
  preset: "jest-puppeteer"
};
