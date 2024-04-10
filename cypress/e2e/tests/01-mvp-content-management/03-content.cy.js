let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Content page", function () {
  beforeEach("cookie banner", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get("#employee_number").type("1234");
    cy.get("#submit-button").should("be.visible").click();
    cy.get(".ambar-btn-accept").should("be.visible").click();
  });

  it("components home page", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(
      ":nth-child(3) > .widget > .home-category-promotion-container > .home-category-promotion-wrapper > :nth-child(1) > a > img"
    ).should("be.visible").click();
    cy.get(".flex > img").should("be.visible").click();
    cy.get(
      ":nth-child(4) > .widget > .home-category-promotion-container > .home-category-promotion-wrapper > :nth-child(1) > a > img"
    ).should("be.visible").click();
    cy.get(".flex > img").should("be.visible").click();
    cy.scrollTo("center");
    // cy.get('.home-season-promotion-item-left > a')
    //   .should('be.visible')
    //   .click();
    cy.scrollTo("bottom");
    cy.get(
      ":nth-child(1) > .product-item-info > .product-image > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo"
    ).should("be.visible").click();
    cy.get(".flex > img").should("be.visible").click();
  });
});
