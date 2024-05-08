let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Footer", function () {
  beforeEach("employee number", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get("#employee_number").type("1234");
    cy.get("#submit-button").should("be.visible").click();
  });

  it("Onlineshop", function () {
    cy.visit(`${config.baseUrl}`);
    // cy.get('.row > .col > .newsletter-contact-wrapper > :nth-child(2) > a')
    //   .should('have.attr', 'href')
    //   .then((href) => {
    //     expect(href).to.equal('');
    // });
    // cy.get('.row > .col > .newsletter-contact-wrapper > :nth-child(3) > a')
    //   .should('have.attr', 'href')
    //   .then((href) => {
    //     expect(href).to.equal('');
    // });
  });
});
