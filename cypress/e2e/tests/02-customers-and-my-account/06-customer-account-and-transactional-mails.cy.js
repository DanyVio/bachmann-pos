let config = Cypress.config();

describe('customer-account-and-transactional-mails', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(2000);
  });

  it('customer-account-and-transactional-mails', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

