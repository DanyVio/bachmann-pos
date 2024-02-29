let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Check the Footer', function () {

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

  it('check all the links in the footer', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#employee_number')
      .type('1234');
    cy.get('#submit-button')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom');
    cy.get('.newsletter-contact-wrapper > :nth-child(2) > a').contains('Zahlungsbedingungen')
      .should('be.visible')
      .click({ multiple: true });
    cy.scrollTo('bottom');
    cy.get('.newsletter-contact-wrapper > :nth-child(3) > a')
      .should('be.visible')
      .click({ multiple: true });
  });
});
