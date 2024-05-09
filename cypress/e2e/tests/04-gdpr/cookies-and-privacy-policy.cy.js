// let config = Cypress.config();

// Cypress.on("uncaught:exception", (err, runnable) => {
//   return false;
// });

// describe("Cookies and privacy policy", function () {
//   it("cookies and privacy policy", function () {
//     cy.visit(`${config.baseUrl}`);
//     cy.get(".ambar-btn-settings").contains("Einstellungen anpassen").click();
//     cy.get(".flex-col > :nth-child(2) > .btn").should("be.visible").click();
//     cy.get(".inline-block > .mt-4").should("be.visible").click();
//     cy.get(":nth-child(3) > .btn").should("be.visible").click();
//     cy.get(".inline-block > .mt-4").should("be.visible").click();
//     cy.get(".flex-col > :nth-child(4) > .btn").should("be.visible").click();
//     cy.get(".inline-block > .mt-4").should("be.visible").click();
//     cy.get("#amcookie-popup-group-2").should("be.visible").click();
//     cy.get("#amcookie-popup-group-3").should("be.visible").click();
//     cy.get(":nth-child(4) > .ambar-action-btn").should("be.visible").click();
//   });
// });
