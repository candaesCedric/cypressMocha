const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: "nyan",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")
    },
  },
});
