const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://gir3.quickdrycleaning.com/',
    env: {
      stagingUrl: 'https://cleankart.quickdrycleaning.com/',
      productionUrl: 'https://subs.quickdrycleaning.com/'
    }
  },
});
