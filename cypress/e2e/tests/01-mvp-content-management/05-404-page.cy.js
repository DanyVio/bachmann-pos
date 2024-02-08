let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('404 page', function () {

  it('404 page', function () {
    cy.visit(`${config.baseUrl}/cuatrocientoscuatro`, { failOnStatusCode: false });
  });
});