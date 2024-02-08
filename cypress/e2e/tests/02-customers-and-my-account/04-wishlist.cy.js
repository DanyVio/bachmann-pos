
let config = Cypress.config();

describe('wishlist', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(2000);
  });

  it('wishlist', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

