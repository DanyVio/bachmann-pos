let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('filters and layered navigation', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('filters and layered navigation', function () {
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
    cy.get('.c-sidebar > :nth-child(2) > :nth-child(2) > [href="https://test-bachmann-confiserie.arcmedia.ch/de/schokolade/spezialitaten"]')
      .should('be.visible')
      .click();
    cy.get('.level0.active > .o-list > :nth-child(3) > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(4) > .modes > #mode-list')
      .should('be.visible')
      .click();
  });
});