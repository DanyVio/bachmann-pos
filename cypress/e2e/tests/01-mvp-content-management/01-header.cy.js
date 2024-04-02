let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Header', function () {

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

  it('Check the Categories', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.w-full > .md-top-menu-items > .nav-587 > [href="https://test-pos.confiserie.arcmedia.ch/pos/saison"]')
      .should('be.visible')
      .click();
    cy.get('.w-full > .md-top-menu-items > .nav-588 > [href="https://test-pos.confiserie.arcmedia.ch/pos/apero"]')
      .should('be.visible')
      .click();
    cy.get('.w-full > .md-top-menu-items > .nav-589 > [href="https://test-pos.confiserie.arcmedia.ch/pos/lieferservice"]')
      .should('be.visible')
      .click();
    cy.get('.w-full > .md-top-menu-items > .nav-590 > [href="https://test-pos.confiserie.arcmedia.ch/pos/schokolade"]')
      .should('be.visible')
      .click();
    cy.get('.w-full > .md-top-menu-items > .nav-591 > [href="https://test-pos.confiserie.arcmedia.ch/pos/kundengeschenke"]')
      .should('be.visible')
      .click();
    cy.get('.w-full > .md-top-menu-items > .nav-592 > [href="https://test-pos.confiserie.arcmedia.ch/pos/torten"]')
      .should('be.visible')
      .click();
  });
});
