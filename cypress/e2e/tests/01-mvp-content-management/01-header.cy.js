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
      '.md-top-menu-items [href="https://test-pos.confiserie.arcmedia.ch/pos/saison"]'
    )
      .contains(" Saison&Spezialitäten ")
      .should("be.visible")
      .click();
    cy.get(
      '.md-top-menu-items [href="https://test-pos.confiserie.arcmedia.ch/pos/apero"]'
    )
      .should("be.visible")
      .click();
    cy.get(
      '[href="https://test-pos.confiserie.arcmedia.ch/pos/lieferservice"]'
    )
      .contains("Brot&Snacks")
      .click();
    cy.get(
      '[href="https://test-pos.confiserie.arcmedia.ch/pos/schokolade"]'
    )
      .contains("Schokolade")
      .should("be.visible")
      .click();
    cy.get(
      '[href="https://test-pos.confiserie.arcmedia.ch/pos/kundengeschenke"]'
    )
      .contains("Kundengeschenke")
      .should("be.visible")
      .click();
    cy.get(
      '[href="https://test-pos.confiserie.arcmedia.ch/pos/torten"]'
    )
      .contains("Torten")
      .should("be.visible")
      .click();
  });

  it("Check the Search field", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get("#search").type("caramelo");
    cy.get(".text-xs")
      .contains('Es konnte nichts für "caramelf" gefunden werden.')
      .should("be.visible");
    cy.get("#search").clear().type("torten");
  });
});
