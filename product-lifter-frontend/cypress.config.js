import cypressMochawesomeReporter from "cypress-mochawesome-reporter/plugin";

const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    env: process.env,
    setupNodeEvents(on, config) {
      cypressMochawesomeReporter(on);
      return config;
      // implement node event listeners here
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "Product Lifter Tests",
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
});
