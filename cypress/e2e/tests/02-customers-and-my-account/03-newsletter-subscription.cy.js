let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Newsletter subscription', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('Newsletter subscription', function () {
    cy.visit(`${config.baseUrl}`);
    cy.scrollTo('bottom');
    cy.get(':nth-child(4) > .action')
      .should('be.visible')
      .click();
  });
});

