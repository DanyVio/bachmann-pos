
let config = Cypress.config();

describe('wishlist', function () {

  it('wishlist', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

