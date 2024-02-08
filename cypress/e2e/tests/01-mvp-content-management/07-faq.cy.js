let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('FAQ', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('faq page', function () {
    cy.visit(`${config.baseUrl}`);
    cy.scrollTo('bottom');
    cy.get('.footer-copyright-links > :nth-child(3) > a')
      .should('be.visible')
      .click();
  });
});