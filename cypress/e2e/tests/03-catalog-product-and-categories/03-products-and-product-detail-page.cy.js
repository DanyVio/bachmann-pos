let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Product detail page', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('product detail page', function () {
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
    cy.get(':nth-child(3) > [href="https://test-bachmann-confiserie.arcmedia.ch/de/lieferservice/menu-salat"]')
      .should('be.visible')
      .click();
    cy.get('.level0.active > .o-list > :nth-child(2) > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(5) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo')
      .should('be.visible')
      .click();
    cy.get('.ui-spinner-up')
      .should('be.visible')
      .click()
      .click()
      .click()
      .click()
      .click()
      .click();
    cy.get('.ui-spinner-down')
      .should('be.visible')
      .click()
      .click();
    cy.get('#product-addtocart-button')
      .should('be.visible')
      .click();
    cy.get('.fotorama__nav__shaft > :nth-child(3)')
      .should('be.visible')
      .click();
    cy.get('.fotorama__nav__shaft > :nth-child(4)')
      .should('be.visible')
      .click();
    cy.get('.fotorama__nav__shaft > :nth-child(5)')
      .should('be.visible')
      .click();
    cy.get('#tab-label-additional_prod_info-title')
      .should('be.visible')
      .click();
    cy.scrollTo('top')
    cy.get('.showcart')
      .should('be.visible')
      .click();
  });
});