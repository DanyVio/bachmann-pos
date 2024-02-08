let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Content page', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('components home page', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.home-category-promotion-wrapper > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.get('.logo > img')
      .should('be.visible')
      .click();
    cy.get('.home-category-promotion-wrapper > :nth-child(3) > a')
      .should('be.visible')
      .click();
    cy.get('.logo > img')
      .should('be.visible')
      .click();
    cy.get('.home-season-promotion-item-right > :nth-child(1) > :nth-child(1)')
      .should('be.visible')
      .click();
    cy.get('.logo > img')
      .should('be.visible')
      .click();
    cy.get('.home-season-promotion-item-right > :nth-child(2) > :nth-child(1)')
      .should('be.visible')
      .click();
  });
});