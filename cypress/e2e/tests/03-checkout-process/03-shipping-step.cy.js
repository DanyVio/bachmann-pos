let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("shipping step", function () {
  beforeEach("cookie banner", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(".ambar-btn-accept").should("be.visible").click();
    cy.get("#employee_number").type("1234");
    cy.get("#submit-button").should("be.visible").click();
  });

  it("shipping step", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(
      '.w-full > .md-top-menu-items > .nav-587 > [href="https://test-pos.confiserie.arcmedia.ch/pos/saison"]'
    )
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
    cy.get("#options_3614_44256").should("be.visible").click();
    cy.get("#product-addtocart-button").should("be.visible").click();
    cy.get("#menu-cart-icon > .absolute").should("be.visible").click();
    cy.get(
      '.pt-3 > [href="https://test-pos.confiserie.arcmedia.ch/pos/checkout/cart/"]'
    )
      .should("be.visible")
      .click();
    cy.get("#checkout-link-button").should("be.visible").click();
    cy.get("#guest_details-email_address").type("daniel.viorel@arcmedia.ch");
    cy.get("#shipping-firstname").type("dany");
    cy.get("#shipping-lastname").type("viorel");
    cy.get("#shipping-street-0").type("test");
    cy.get("#shipping-postcode").type("6003");
    cy.get("#shipping-telephone").type("6786768768");
    cy.get("#shipping-method-storepickup").should("be.visible").click();
    cy.get("#payment-method-saferpay_visa").should("be.visible").click();
  });
});
