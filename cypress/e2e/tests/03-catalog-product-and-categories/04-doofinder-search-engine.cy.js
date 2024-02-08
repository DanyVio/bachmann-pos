let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Doofinder', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('doofinder', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#search')
      .type('macarons');
    cy.get(':nth-child(2) > .title')
      .should('be.visible')
      .click();
    cy.get('.mst-searchautocomplete__show-all > a > span')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .mst-search__index-title > [href="https://test-bachmann-confiserie.arcmedia.ch/de/apero"]')
      .should('be.visible')
      .click();
  });
});





