
let config = Cypress.config();

describe('My Account', function () {
  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(2000);
  });

  it('my account', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

