let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("payment step", function () {
  beforeEach("employee number", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get("#employee_number").type("1234");
    cy.get("#submit-button").should("be.visible").click();
  });

  it("payment step", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(
      '.main-navigation .w-full [href="https://test-pos.confiserie.arcmedia.ch/pos/saison"]'
    )
      .contains(" Saison&Spezialitäten ")
      .should("be.visible")
      .click();
      cy.get(':nth-child(4) > .category-2-desktop > .category-2-img > .category-image-photo')
      .should("be.visible")
      .click();
    cy.get(".level0.active > .o-list > :nth-child(1) > a")
      .should("be.visible")
      .click();
    cy.get(":nth-child(1) > .item > .product-image > .product")
      .should("be.visible")
      .click();
    cy.get('#product-addtocart-button').should("be.visible").click();
    cy.get('.cart-icon').should("be.visible").click();
    cy.get('.btn').contains('Warenkorb anzeigen').should("be.visible").click();
    cy.get("#checkout-link-button").should("be.visible").click();
    cy.get("#guest_details-email_address").type("daniel.viorel@arcmedia.ch");
    cy.get("#shipping-firstname").type("dany");
    cy.get("#shipping-lastname").type("viorel");
    cy.get("#shipping-street-0").type("test");
    cy.get("#shipping-postcode").type("6003");
    cy.get("#shipping-telephone").type("6786768768");
    cy.get("#shipping-method-storepickup").should("be.visible").click();
    cy.get('#pickup-store').select('Luzern, Alpenstrasse');
    cy.get('#date_pickup').should('be.visible').click({ force: true });
    cy.wait(5000);
    cy.get(':nth-child(25) > .vanilla-calendar-day__btn').click({ force: true });
    cy.wait(5000);
    cy.get('#store-time').select('11:00 - 12:00', { force: true });
    cy.wait(5000);
    cy.get("#payment-method-saferpay_visa").should("be.visible").click();
    cy.get('#checkout_filial_number_employee').type('EM');
    cy.wait(5000);
    cy.get('#checkout_number_employee').type('1234');
    cy.wait(5000);
    cy.get('.nav-main > .flex > .btn').should("be.visible").click();
  });
});
