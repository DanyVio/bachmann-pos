
let config = Cypress.config();

describe('customer-management', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(2000);
  });

  it('customer-management', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

