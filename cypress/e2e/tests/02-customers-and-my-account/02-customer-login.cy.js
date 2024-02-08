let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Customer login as a guest', function () {

  it('customer login as a guest', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

