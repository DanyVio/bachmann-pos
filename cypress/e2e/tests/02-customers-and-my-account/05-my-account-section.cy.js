
let config = Cypress.config();

describe('My Account', function () {

  it('my account', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

