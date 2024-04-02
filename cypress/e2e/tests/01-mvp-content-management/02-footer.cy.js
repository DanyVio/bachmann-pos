let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Footer', function () {

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

  it('Check the footer', function () {
    cy.scrollTo('bottom');
    cy.get('.row > .col > .newsletter-contact-wrapper > :nth-child(2) > a')
      .should('be.visible')
      .click({ multiple: true });
    cy.scrollTo('bottom');
    cy.get('.row > .col > .newsletter-contact-wrapper > :nth-child(3) > a')
      .should('be.visible')
      .click({ multiple: true });
  });
});

