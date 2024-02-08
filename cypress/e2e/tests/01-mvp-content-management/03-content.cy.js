let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Content page', function () {

  it('components home page', function () {
    cy.visit(`${config.baseUrl}`);
  });
});