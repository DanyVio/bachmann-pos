let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('filters and layered navigation', function () {

  it('filters and layered navigation', function () {
    cy.visit(`${config.baseUrl}`);
  });
});