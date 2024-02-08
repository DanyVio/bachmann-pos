let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Check the Header', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  context('because reCaptcha is enabled, we are unable to log in to my account', function () {
      it('I have access to my account link in a header menu', function () {
        cy.visit(`${config.baseUrl}`);
        cy.get('.account-link')
          .should('be.visible')
          .click();
        cy.get('#email')
          .type('daniel.viorel@arcmedia.ch');
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass')
          .type('test1234')
        cy.get('.choice > .label')
          .should('be.visible')
          .click();
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2')
          .should('be.visible')
          .click();
        cy.get('.message-error > div').contains('Sie haben sich nicht korrekt eingeloggt oder Ihr Konto ist vorübergehend deaktiviert.')
          .should('be.visible');
      });
    });

  context('Header categories', function () {
    it('I have access to main products categories from a top menu', function () {
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

    it('I have access to the cart and see a mini cart in a header menu as a guest', function () {
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
      cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo')
        .should('be.visible')
        .click();
      cy.get('#product-addtocart-button')
        .should('be.visible')
        .click();
      cy.get(':nth-child(4) > .secondary > .action')
        .should('be.visible')
        .click();
    });
  });
});
