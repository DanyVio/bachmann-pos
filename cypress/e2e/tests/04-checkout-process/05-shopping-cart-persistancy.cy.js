let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Shopping cart persistancy', function () {

  it('shopping cart persistancy', function () {
    cy.visit(`${config.baseUrl}`);
  });
});







