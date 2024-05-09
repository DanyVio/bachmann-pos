let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Doofinder", function () {
  beforeEach("employee number", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get("#employee_number").type("1234");
    cy.get("#submit-button").should("be.visible").click();
  });

  it("doofinder", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get("#search").type("torten");
    cy.get(":nth-child(4) > .flex-nowrap > .w-full > .text-gray-900")
      .should("be.visible")
      .click({ force: true });
  });
});
