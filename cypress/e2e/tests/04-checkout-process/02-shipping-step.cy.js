let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Shipping method', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('shipping method', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(':nth-child(2) > :nth-child(1) > [href="https://test-bachmann-confiserie.arcmedia.ch/de/saison"]')
      .should('be.visible')
      .click();
    cy.get(':nth-child(5) > .category-2-desktop > .category-2-img > .category-image-photo')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .category-item-info > .photo > .category-image-container > .category-image-wrapper > .category-image-photo')
      .should('be.visible')
      .click();
    cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo')
      .should('be.visible')
      .click();
    cy.get('#product-addtocart-button')
      .should('be.visible')
      .click();
    cy.get('#top-cart-btn-checkout')
      .should('be.visible')
      .click();
    cy.get('.gift-card-toggle')
      .should('be.visible')
      .click();
    cy.get('#customer-email-fieldset > .required > .control > #customer-email')
      .type('testingarcmedia@test.com');
    cy.get('[name="firstname"]')
      .type('test');
    cy.get('[name="lastname"]')
      .type('test');
    cy.get('[name="company"]')
      .type('test');
    cy.get('[name="street[0]"]')
      .type('test');
    cy.get('[name="postcode"]')
      .type('6003');
    cy.get('[name="city"]')
      .type('Luzern');
    cy.get('[name="country_id"]')
      .select('Schweiz');
    cy.get('[name="telephone"]')
      .type('6786786786');
    cy.get(':nth-child(3) > :nth-child(1) > label')
      .should('be.visible')
      .click();
    cy.get('#pickup-store')
      .select('Luzern, Alpenstrasse');
    cy.get('#pickup-date')
      .click();
    cy.get(':nth-child(3) > :nth-child(4) > .ui-state-default').contains('15')
      .should('be.visible')
      .click();
    cy.get('#store_time')
      .select('15:15 - 15:45');
  });
});

