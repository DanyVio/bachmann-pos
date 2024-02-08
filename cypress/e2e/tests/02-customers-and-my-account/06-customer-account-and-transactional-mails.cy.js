let config = Cypress.config();

describe('customer-account-and-transactional-mails', function () {

  it('customer-account-and-transactional-mails', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

