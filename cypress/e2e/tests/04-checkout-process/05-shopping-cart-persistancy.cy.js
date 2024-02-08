let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Shopping cart persistancy', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('shopping cart persistancy', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(':nth-child(2) > :nth-child(1) > [href="https://test-bachmann-confiserie.arcmedia.ch/de/saison"]')
      .should('be.visible')
      .click();
    cy.get(':nth-child(2) > :nth-child(1) > [href="https://test-bachmann-confiserie.arcmedia.ch/de/saison/spezialitaten"]')
      .should('be.visible')
      .click();
    cy.get('.level0.active > .o-list > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo')
      .should('be.visible')
      .click();
    cy.get('#product-addtocart-button')
      .should('be.visible')
      .click();
    cy.get('.showcart')
      .should('be.visible')
      .click();
  });

  it('checking the cart ', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(':nth-child(2) > :nth-child(1) > [href="https://test-bachmann-confiserie.arcmedia.ch/de/saison"]')
      .should('be.visible')
      .click();
    cy.get(':nth-child(2) > :nth-child(1) > [href="https://test-bachmann-confiserie.arcmedia.ch/de/saison/spezialitaten"]')
      .should('be.visible')
      .click();
    cy.get('.level0.active > .o-list > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo')
      .should('be.visible')
      .click();
    cy.get('#product-addtocart-button')
      .should('be.visible')
      .click();
    cy.get('.showcart')
      .should('be.visible')
      .click();
  });
});







