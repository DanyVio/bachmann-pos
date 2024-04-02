let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Shipping method', function () {
  it('shipping method', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

