let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Header', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.amgdprcookie-button.-allow.-save')
      .should('be.visible')
      .click();
    cy.wait(3000);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
  });

  
  it('Log in as a employee user', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#employee_number')
      .type('1234');
    cy.get('#submit-button')
      .should('be.visible')
      .click();
    });
  it.skip('I have access to the cart and see a mini cart in a header menu as a guest', function () {
    cy.visit(`${config.baseUrl}`);
  });
});
