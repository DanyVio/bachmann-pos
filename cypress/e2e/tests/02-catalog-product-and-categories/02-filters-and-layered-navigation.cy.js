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
    cy.get(
      ':nth-child(2) > :nth-child(1) > [href="https://test-pos.confiserie.arcmedia.ch/pos/spezielles/spezialitaten"]'
    )
      .should("be.visible")
      .click();
    cy.get(".level0.active > .o-list > :nth-child(4) > a")
      .should("be.visible")
      .click();
    cy.get(".category437 > .no-underline")
      .should("be.visible")
      .click({ force: true });
    cy.get(".category468 > .no-underline")
      .should("be.visible")
      .click({ force: true });
    cy.get(".home > .no-underline").should("be.visible").click({ force: true });
  });
});
