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
    cy.get('[href="https://test-pos.confiserie.arcmedia.ch/pos/saison"]')
      .contains(" Saison&Spezialitäten ")
      .should("be.visible")
      .click();
    cy.get('.order-1 > .flex > img')
      .should("be.visible")
      .click();
    cy.get('[href="https://test-pos.confiserie.arcmedia.ch/pos/apero"]')
      .contains("  Apéro  ")
      .should("be.visible")
      .click();
    cy.get('.order-1 > .flex > img')
      .should("be.visible")
      .click();
    cy.get(
      '.w-full > .md-top-menu-items > .nav-589 > [href="https://test-pos.confiserie.arcmedia.ch/pos/lieferservice"]'
    )
      .should("be.visible")
      .click();
    cy.get(
      '.w-full > .md-top-menu-items > .nav-590 > [href="https://test-pos.confiserie.arcmedia.ch/pos/schokolade"]'
    )
      .should("be.visible")
      .click();
    cy.get(
      '.w-full > .md-top-menu-items > .nav-591 > [href="https://test-pos.confiserie.arcmedia.ch/pos/kundengeschenke"]'
    )
      .should("be.visible")
      .click();
    cy.get(
      '.w-full > .md-top-menu-items > .nav-592 > [href="https://test-pos.confiserie.arcmedia.ch/pos/torten"]'
    )
      .should("be.visible")
      .click();
  });
});
