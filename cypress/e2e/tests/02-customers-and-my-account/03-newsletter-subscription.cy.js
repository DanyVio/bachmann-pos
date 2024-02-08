let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Newsletter subscription', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

