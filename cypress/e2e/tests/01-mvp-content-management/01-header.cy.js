let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Check the Header', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(2000);
  });

  context('Header categories', function () {
    it('I have access to main products categories from a top menu', function () {
      cy.visit(`${config.baseUrl}`);
      cy.get('.menu-dropdown-icon').contains('Saison&Spezialitäten')
        .should('be.visible')
        .click();
      cy.get('.menu > :nth-child(2) > :nth-child(2) > :nth-child(1)')
        .should('be.visible')
        .click();
      cy.get(':nth-child(2) > :nth-child(3) > [href="https://test-bachmann-confiserie.arcmedia.ch/de/lieferservice"]')
        .should('be.visible')
        .click();
      cy.get(':nth-child(2) > :nth-child(4) > [href="https://test-bachmann-confiserie.arcmedia.ch/de/schokolade-1"]')
        .should('be.visible')
        .click();
      cy.get('[href="https://test-bachmann-confiserie.arcmedia.ch/de/kundengeschenke"]')
        .should('be.visible')
        .click();
      cy.get('.menu > :nth-child(2) > :nth-child(6) > :nth-child(1)')
        .should('be.visible')
        .click();
      cy.get('[href="https://test-bachmann-confiserie.arcmedia.ch/bachmann/unternehmen/uebersicht"]')
        .should('be.visible')
        .click();
    });

    it.skip('I have access to the cart and see a mini cart in a header menu as a guest', function () {
      cy.visit(`${config.baseUrl}`);
    });
  });
});
