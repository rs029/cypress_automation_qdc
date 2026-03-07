const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://gir3.quickdrycleaning.com',
    env: {
      validUser: "S_admin",
      validPass: "admin@123",
      validSCode: "SUB1",
      invalidUser: "S_admi",
      invalidPass: "admin",
      invalidSCode: "SNVC"
    }
  },
});
