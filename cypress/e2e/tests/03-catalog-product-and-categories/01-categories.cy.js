let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Categories', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('categories', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(':nth-child(2) > :nth-child(1) > [href="https://test-bachmann-confiserie.arcmedia.ch/de/saison"]')
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
    cy.get(':nth-child(2) > :nth-child(5) > [href="https://test-bachmann-confiserie.arcmedia.ch/de/kundengeschenke"]')
      .should('be.visible')
      .click();
    cy.get('.menu > :nth-child(2) > :nth-child(6) > :nth-child(1)')
      .should('be.visible')
      .click();
    cy.get('[href="https://test-bachmann-confiserie.arcmedia.ch/bachmann/unternehmen/uebersicht"]')
      .should('be.visible')
      .click();
  });
});

