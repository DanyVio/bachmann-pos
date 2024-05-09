let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("upload foto", function () {
  beforeEach("employee number", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get("#employee_number").type("1234");
    cy.get("#submit-button").should("be.visible").click();
  });

  it("upload foto", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(
      '.main-navigation .w-full [href="https://test-pos.confiserie.arcmedia.ch/pos/torten"]'
    )
      .contains("Torten")
      .should("be.visible")
      .click();
    cy.get(
      ':nth-child(2) > :nth-child(3) > [href="https://test-pos.confiserie.arcmedia.ch/pos/torten/fototorten"]'
    )
      .should("be.visible")
      .click();
    cy.get(".level0.active > .o-list > :nth-child(1) > a")
      .should("be.visible")
      .click();
    cy.get(":nth-child(1) > .item > .product-image > .product")
      .should("be.visible")
      .click();
    cy.get("#options_259_753").should("be.visible").click();
    cy.get("#options_14828_73011").should("be.visible").click();
    cy.get('#options_19550_text').type('test');
    cy.get('#product-addtocart-button').should("be.visible").click();
    cy.get('.cart-icon').should("be.visible").click();
    cy.get('.btn').contains('Warenkorb anzeigen').should("be.visible").click();
    cy.get('.image-upload-qr-link > a').should("be.visible").click();
  });
});
