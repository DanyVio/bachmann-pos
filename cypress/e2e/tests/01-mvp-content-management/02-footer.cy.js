let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Check the Footer', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#btn-cookie-allow')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('check all the links in the footer', function () {
    cy.visit(`${config.baseUrl}`);
    cy.scrollTo('bottom');
    cy.get('.half-one > .row > :nth-child(1) > [data-role="content"] > ul > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom')
    cy.get('.half-one > .row > :nth-child(1) > [data-role="content"] > ul > :nth-child(2) > a')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom')
    cy.get('.half-one > .row > :nth-child(1) > [data-role="content"] > ul > :nth-child(3) > a')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom')
    cy.get('.half-one > .row > :nth-child(1) > [data-role="content"] > ul > :nth-child(4) > a')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom')
    cy.get('.row > :nth-child(1) > [data-role="content"] > ul > :nth-child(5) > a')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom')
    cy.get('.row > :nth-child(1) > [data-role="content"] > ul > :nth-child(6) > a')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom')
    cy.get(':nth-child(2) > [data-role="content"] > ul > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom')
    cy.get(':nth-child(2) > [data-role="content"] > ul > :nth-child(2) > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(2) > [data-role="content"] > ul > :nth-child(3) > a')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom')
    cy.get(':nth-child(2) > [data-role="content"] > ul > :nth-child(4) > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(2) > [data-role="content"] > ul > :nth-child(5) > a')
      .should('be.visible')
      .click();
    cy.get('.half-two > .row > :nth-child(1) > [data-role="content"] > ul > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.get('.half-two > .row > :nth-child(1) > [data-role="content"] > ul > :nth-child(2) > a')
      .should('be.visible')
      .click();
    cy.get('.half-two > .row > :nth-child(1) > [data-role="content"] > ul > :nth-child(3) > a')
      .should('be.visible')
      .click();
    cy.get('.half-two > .row > :nth-child(1) > [data-role="content"] > ul > :nth-child(4) > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(4) > .action')
      .should('be.visible')
      .click();
  });

  it('facebook', function () {
    cy.visit(`${config.baseUrl}`);
    cy.scrollTo('bottom')
    cy.get('.social-facebook-wrap a')
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.equal('https://www.facebook.com/confiseriebachmann/');
      }); 
  });

  it('instagram', function () {
    cy.visit(`${config.baseUrl}`);
    cy.scrollTo('bottom')
    cy.get('.social-instagram-wrap a')
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.equal('https://www.instagram.com/bachmannconfiserie/');
      });  
  });

  

  it('tiktok', function () {
    cy.visit(`${config.baseUrl}`);
    cy.scrollTo('bottom');
    cy.get('.social-tiktok-wrap a')
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.equal('https://www.tiktok.com/@confiseriebachmann');
      });
  });

  it('youtube', function () {
    cy.visit(`${config.baseUrl}`);
    cy.scrollTo('bottom');
    cy.get('.social-youtube-wrap a')
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.equal('https://www.youtube.com/user/bachmannluzern');
      });
  });
});
