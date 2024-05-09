let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("404 page", function () {
  beforeEach("employee number", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get("#employee_number").type("1234");
    cy.get("#submit-button").should("be.visible").click();
  });

  it("404 page", function () {
    cy.visit(`${config.baseUrl}/cuatrocientoscuatro`, {
      failOnStatusCode: false,
    });
  });
});
