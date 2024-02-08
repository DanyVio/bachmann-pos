let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Product detail page', function () {

  it('product detail page', function () {
    cy.visit(`${config.baseUrl}`);
  });
});