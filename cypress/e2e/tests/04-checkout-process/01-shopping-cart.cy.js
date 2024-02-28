let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Shopping Cart as a guest', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.wait(3000);
    cy.get('.-allow')
      .should('be.visible')
      .click();
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
  });

  it('shopping cart as a guest', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#employee_number')
        .type('1234');
    cy.get('#submit-button')
      .should('be.visible')
      .click();
    cy.get('.menu > :nth-child(2) > :nth-child(6) > :nth-child(1)')
      .should('be.visible')
      .click();
    cy.get(':nth-child(3) > [href="https://test-bachmann-confiserie.arcmedia.ch/de/torten/fototorten"]')
      .should('be.visible')
      .click();
    cy.get('.level0.active > .o-list > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.get('.-allow')
      .should('be.visible')
      .click();
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .product-item-info > .d-mode-grid > .product-item-link')
      .should('be.visible')
      .click();
    cy.get('#input-box-options_14829_file > .input-file-content > .file-input-trigger')
      .should('be.visible')
      .click();
    cy.get('#product-addtocart-button')
      .should('be.visible')
      .click();
  });
});

