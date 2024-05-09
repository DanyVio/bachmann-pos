let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Header", function () {
  beforeEach("employee number", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get("#employee_number").type("1234");
    cy.get("#submit-button").should("be.visible").click();
  });

  it("Check the Categories", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(
      '.main-navigation .w-full [href="https://test-pos.confiserie.arcmedia.ch/pos/saison"]'
    )
      .contains(" Saison&Spezialitäten ")
      .should("be.visible")
      .click();
    cy.get(':nth-child(2) > :nth-child(3) > [href="https://test-pos.confiserie.arcmedia.ch/pos/saison/geschenkkarte"]')
      .should("be.visible")
      .click();
    cy.get(".level0.active > .o-list > :nth-child(1) > a")
      .should("be.visible")
      .click();
    cy.get(":nth-child(3) > .item > .product-image")
      .should("be.visible")
      .click();
    cy.get(".qty > .plus").should("be.visible").click().click().click().click();
    cy.get(":nth-child(3) > .block > img").should("be.visible").click();
    cy.get("#product-addtocart-button").should("be.visible").click();
    cy.get(".cart-icon").should("be.visible").click();
    cy.get(
      '.pt-3 > [href="https://test-pos.confiserie.arcmedia.ch/pos/checkout/cart/"]'
    )
      .should("be.visible")
      .click();
  });
});
