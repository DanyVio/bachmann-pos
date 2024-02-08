let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('legal pages', function () {
  it('legal pages', function () {
    cy.visit(`${config.baseUrl}`);
  });
});