let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('legal pages', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('legal pages', function () {
    cy.visit(`${config.baseUrl}`);
    cy.scrollTo('bottom');
    cy.get('.footer-copyright-links > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.get('.footer-copyright-links > :nth-child(2) > a')
      .should('be.visible')
      .click();
    cy.get('.footer-copyright-links > :nth-child(3) > a')
      .should('be.visible')
      .click();
  });
});