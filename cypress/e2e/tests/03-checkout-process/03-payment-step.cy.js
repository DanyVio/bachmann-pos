let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Payment step as a guest', function () {

  it('payment step as a guest', function () {
    cy.visit(`${config.baseUrl}`);
  });
});



