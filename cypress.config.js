const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "enytfo",
  viewportWidth: 1920,
  viewportHeight: 1280,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://arcmedia:arcmedia123@test-bachmann-confiserie.arcmedia.ch/",
    viewportWidth: 1920,
    viewportHeight: 1280,
    specPattern: 'cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}',
  },

  defaultCommandTimeout: 120000,
  execTimeout: 120000,
  taskTimeout: 120000,
  numTestsKeptInMemory: 0
});