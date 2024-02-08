let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Categories', function () {

  it('categories', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

