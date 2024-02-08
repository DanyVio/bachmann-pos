let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Shopping Cart as a guest', function () {

  it('shopping cart as a guest', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

