let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Shop registration', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('create a fake user', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.account-link')
      .should('be.visible')
      .click();
    cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action')
      .should('be.visible')
      .click();
    cy.get('#firstname')
      .type('test');
    cy.get('#lastname')
      .type('testdany');
    cy.get('#email_address')
      .type('testdany');
    cy.get('#password')
      .type('Test1234');
    cy.get('#password-confirmation')
      .type('Test1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action')
  });

  it('create a new user', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.account-link')
      .should('be.visible')
      .click();
    cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action')
      .should('be.visible')
      .click();
    cy.get('#firstname')
      .type('test');
    cy.get('#lastname')
      .type('testdany');
    cy.get('#email_address')
    .type('test@testdany.com');
    cy.get('#password')
    .type('Test1234');
    cy.get('#password-confirmation')
    .type('Test1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action')
  });
});

