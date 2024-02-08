let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Check the Footer', function () {

  it('check all the links in the footer', function () {
    cy.visit(`${config.baseUrl}`);
  });
});
