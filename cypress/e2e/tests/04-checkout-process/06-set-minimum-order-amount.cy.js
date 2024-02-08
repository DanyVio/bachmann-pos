let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Minimum order amount', function () {

  it('minimum order amount', function () {
    cy.visit(`${config.baseUrl}`);
  });
});





