let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Doofinder', function () {

  it('doofinder', function () {
    cy.visit(`${config.baseUrl}`);
  });
});





