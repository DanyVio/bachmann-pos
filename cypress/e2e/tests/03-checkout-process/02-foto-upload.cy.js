let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('upload foto', function () {

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

  it('upload foto error', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.w-full > .md-top-menu-items > .nav-592 > [href="https://test-pos.confiserie.arcmedia.ch/pos/torten"]')
      .should('be.visible')
      .click();
    cy.get(':nth-child(2) > :nth-child(3) > [href="https://test-pos.confiserie.arcmedia.ch/pos/torten/fototorten"]')
      .should('be.visible')
      .click();
    cy.get('.level0.active > .o-list > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .item > .product-image > .product')
      .should('be.visible')
      .click();
    cy.get('#options_259_753')
      .should('be.visible')
      .click();
    cy.get('#options_14828_73011')
      .should('be.visible')
      .click();
    cy.get('.file-input-trigger')
      .should('be.visible')
      .click()
      .click();
    cy.get('#options_19550_text')
      .type('test');
    cy.get('#product-addtocart-button')
      .should('be.visible')
      .click();
    cy.get('.cart-icon')
      .should('be.visible')
      .click();
    cy.get('.pt-3 > [href="https://test-pos.confiserie.arcmedia.ch/pos/checkout/cart/"]')
      .should('be.visible')
      .click();
    cy.get('#checkout-image-upload-validation')
      .should('be.visible')
      .click();
    cy.get('#checkout-link-button')
      .should('be.visible')
      .click();
  });

  it('upload foto success', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#employee_number')
      .type('1234');
    cy.get('#submit-button')
      .should('be.visible')
      .click();
    cy.get('.w-full > .md-top-menu-items > .nav-592 > [href="https://test-pos.confiserie.arcmedia.ch/pos/torten"]')
      .should('be.visible')
      .click();
    cy.get(':nth-child(2) > :nth-child(3) > [href="https://test-pos.confiserie.arcmedia.ch/pos/torten/fototorten"]')
      .should('be.visible')
      .click();
    cy.get('.level0.active > .o-list > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .item > .product-image > .product')
      .should('be.visible')
      .click();
    cy.get('#options_259_753')
      .should('be.visible')
      .click();
    cy.get('#options_14828_73011')
      .should('be.visible')
      .click();
    cy.get('.file-input-trigger')
      .should('be.visible')
      .click()
      .click();
    cy.wait(25000);
    cy.get('#options_19550_text')
      .type('test');
    cy.get('#product-addtocart-button')
      .should('be.visible')
      .click();
    cy.get('.cart-icon')
      .should('be.visible')
      .click();
    cy.get('.pt-3 > [href="https://test-pos.confiserie.arcmedia.ch/pos/checkout/cart/"]')
      .should('be.visible')
      .click();
    cy.get('#checkout-image-upload-validation')
      .should('be.visible')
      .click();
    cy.get('#checkout-link-button')
      .should('be.visible')
      .click();
  });
});

