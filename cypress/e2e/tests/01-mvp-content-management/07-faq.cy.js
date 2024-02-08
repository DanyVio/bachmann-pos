let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('FAQ', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
  });
});