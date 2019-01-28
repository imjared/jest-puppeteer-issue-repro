const { setup: setupPuppeteer } = require('jest-environment-puppeteer')

// global-setup.js
module.exports = async function globalSetup() {
  await setupPuppeteer(globalConfig)
};
