let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Check the Header', function () {

  context('because reCaptcha is enabled, we are unable to log in to my account', function () {
    it('I have access to my account link in a header menu', function () {
      cy.visit(`${config.baseUrl}`);
    });
  });

  context('Header categories', function () {
    it('I have access to main products categories from a top menu', function () {
    });

    it('I have access to the cart and see a mini cart in a header menu as a guest', function () {
    });
  });
});
