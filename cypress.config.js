// cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://localhost:3000', 
    specPattern: 'cypress/e2e/**/*.spec.js', 
    supportFile: false, 
  },
});
