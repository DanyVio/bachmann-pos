let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Contact page', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('contact page', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.panel > .header-help-container > .header-help > .header-help-list > :nth-child(1) > a')
      .should('be.visible')
      .click();
  });
});