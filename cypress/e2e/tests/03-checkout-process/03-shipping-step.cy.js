let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("shipping step", function () {
  beforeEach("employee number", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get("#employee_number").type("1234");
    cy.get("#submit-button").should("be.visible").click();
  });

  it("shipping step without text and image load", function () {
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
    cy.get("#payment-method-saferpay_visa").should("be.visible").click();
  });

  it("shipping step with text and image load", function () {
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
    cy.get('#checkout-image-upload-validation').should("be.visible").click();
    cy.get("#checkout-link-button").should("be.visible").click();
    // cy.get("#guest_details-email_address").type("daniel.viorel@arcmedia.ch");
    // cy.get("#shipping-firstname").type("dany");
    // cy.get("#shipping-lastname").type("viorel");
    // cy.get("#shipping-street-0").type("test");
    // cy.get("#shipping-postcode").type("6003");
    // cy.get("#shipping-telephone").type("6786768768");
    // cy.get("#shipping-method-storepickup").should("be.visible").click();
    // cy.get("#payment-method-saferpay_visa").should("be.visible").click();
  });
});
