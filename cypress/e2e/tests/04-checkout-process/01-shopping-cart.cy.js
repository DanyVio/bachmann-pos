let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Shopping Cart as a guest', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('shopping cart as a guest', function () {
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
    cy.get(':nth-child(4) > .secondary > .action')
      .should('be.visible')
      .click();
    cy.get('#block-shipping > .title > .fa')
      .should('be.visible')
      .click();
    cy.get('[name="country_id"]')
      .select('Schweiz');
    cy.get('[name="postcode"]').clear()
      .type(6003);
    cy.get('.items > :nth-child(2) > :nth-child(2) > .label')
      .should('be.visible')
      .click();
      cy.get('.totals-tax-summary > .amount > .price')
      .should('be.visible')
      .click()
      .wait(2000)
      .click();
    cy.get('#block-discount > .title')
      .should('be.visible')
      .click()
      .wait(2000)
      .click();
    cy.scrollTo('top');
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
      .click()
      .click();
    cy.get('.actions-toolbar > .action')
      .should('be.visible')
      .click();
  });
});

