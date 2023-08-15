const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      base: "http://127.0.0.1:5500/html/index.html"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
