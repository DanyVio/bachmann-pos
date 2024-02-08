let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Cookies and privacy policy', function () {

  it('cookies and privacy policy', function () {
    cy.visit(`${config.baseUrl}`);
  });
});







