
let config = Cypress.config();

describe('customer-management', function () {

  it('customer-management', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

