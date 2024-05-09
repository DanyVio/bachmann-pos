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
    cy.get(".order-1 > .flex > img").should("be.visible").click();
    cy.get(
      '.main-navigation .w-full [href="https://test-pos.confiserie.arcmedia.ch/pos/apero"]'
    )
      .contains(" Apéro ")
      .should("be.visible")
      .click();
    cy.get(".order-1 > .flex > img").should("be.visible").click();
    cy.get(
      '.main-navigation .w-full [href="https://test-pos.confiserie.arcmedia.ch/pos/lieferservice"]'
    )
      .contains("Brot&Snacks")
      .should("be.visible")
      .click();
    cy.get(".order-1 > .flex > img").should("be.visible").click();
    cy.get(
      '.main-navigation .w-full [href="https://test-pos.confiserie.arcmedia.ch/pos/schokolade"]'
    )
      .contains("Schokolade")
      .should("be.visible")
      .click();
    cy.get(".order-1 > .flex > img").should("be.visible").click();
    cy.get(
      '.main-navigation .w-full [href="https://test-pos.confiserie.arcmedia.ch/pos/kundengeschenke"]'
    )
      .contains("Kundengeschenke")
      .should("be.visible")
      .click();
    cy.get(".order-1 > .flex > img").should("be.visible").click();
    cy.get(
      '.main-navigation .w-full [href="https://test-pos.confiserie.arcmedia.ch/pos/torten"]'
    )
      .contains("Torten")
      .should("be.visible")
      .click();
  });
});
