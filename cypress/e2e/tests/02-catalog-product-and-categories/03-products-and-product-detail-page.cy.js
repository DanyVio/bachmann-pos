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
    cy.get('.c-sidebar > :nth-child(2) > :nth-child(2) > [href="https://test-pos.confiserie.arcmedia.ch/pos/saison/ostern"]')
      .should('be.visible')
      .click();
    cy.get('.level0.active > .o-list > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(3) > .item > .product-image')
      .should('be.visible')
      .click();
    cy.get('.qty > .plus')
      .should('be.visible')
      .click()
      .click()
      .click()
      .click();
    cy.get(':nth-child(3) > .block > img')
      .should('be.visible')
      .click();
    cy.get('#product-addtocart-button')
      .should('be.visible')
      .click();
    cy.get('.cart-icon')
      .should('be.visible')
      .click();
    cy.get('.pt-3 > [href="https://test-pos.confiserie.arcmedia.ch/pos/checkout/cart/"]')
      .should('be.visible')
      .click();
  });
});

