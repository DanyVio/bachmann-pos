let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('404 page', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('404 page', function () {
    cy.visit(`${config.baseUrl}/cuatrocientoscuatro`, { failOnStatusCode: false });
  });
});