let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('shopping cart persistancy', function () {

  beforeEach('cookie banner', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.get('#employee_number')
      .type('1234');
    cy.get('#submit-button')
      .should('be.visible')
      .click();
  });

  it('shopping cart persistancy', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.w-full > .md-top-menu-items > .nav-587 > [href="https://test-pos.confiserie.arcmedia.ch/pos/saison"]')
      .should('be.visible')
      .click();
  });
});













