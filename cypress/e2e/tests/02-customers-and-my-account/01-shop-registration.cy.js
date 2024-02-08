let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Shop registration', function () {

  it('create a fake user', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

