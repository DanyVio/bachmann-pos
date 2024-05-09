let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Cart", function () {
  beforeEach("employee number", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get("#employee_number").type("1234");
    cy.get("#submit-button").should("be.visible").click();
  });

  it("shopping cart", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(
      '.main-navigation .w-full [href="https://test-pos.confiserie.arcmedia.ch/pos/saison"]'
    )
      .contains(" Saison&Spezialitäten ")
      .should("be.visible")
      .click();
    cy.get(
      ':nth-child(2) > :nth-child(1) > [href="https://test-pos.confiserie.arcmedia.ch/pos/spezielles/spezialitaten"]'
    )
      .should("be.visible")
      .click();
    cy.get(".level0.active > .o-list > :nth-child(1) > a")
      .should("be.visible")
      .click();
    cy.get(":nth-child(1) > .item > .product-image > .product")
      .should("be.visible")
      .click();
    cy.get(".qty > .plus").should("be.visible").click();
  });
});
