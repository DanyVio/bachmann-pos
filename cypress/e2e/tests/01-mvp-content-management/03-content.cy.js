let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Content page", function () {
  beforeEach("employee number", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get("#employee_number").type("1234");
    cy.get("#submit-button").should("be.visible").click();
  });

  it("components home page", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.home-category-promotion-wrapper > :nth-child(1) > a > img').should("be.visible").click();
    cy.get('.order-1 > .flex > img').should("be.visible").click();
    cy.get(':nth-child(2) > a > img').should("be.visible").click();
    cy.get('.order-1 > .flex > img').should("be.visible").click();
    cy.get(':nth-child(3) > a > img').should("be.visible").click();
    cy.get('.order-1 > .flex > img').should("be.visible").click();
    cy.get(':nth-child(4) > a > img').should("be.visible").click();
    cy.get('.order-1 > .flex > img').should("be.visible").click();
    cy.get(':nth-child(5) > a > img').should("be.visible").click();
    cy.get('.order-1 > .flex > img').should("be.visible").click();
    cy.get(':nth-child(6) > a > img').should("be.visible").click();
    cy.get('.order-1 > .flex > img').should("be.visible").click();
  });
});
