// cypress/integration/sauce-demo-test.js

describe('Sauce Labs Demo Test', () => {
  before(() => {
    // Clear cookies and local storage
    cy.clearCookies();
    cy.clearLocalStorage();

    // Visit the Sauce Labs Demo website
    cy.visit('https://www.saucedemo.com/');
  });

  it('Should log in with valid credentials', () => {
    // Enter valid username and password and click the login button
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Verify that the user is logged in and on the products page
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_item').should('have.length.gt', 0); // Check if products are displayed
  });

  it('Should log out', () => {
    // Log out by clicking the menu button and then the logout link
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();

    // Verify that the user is logged out and on the login page
    cy.contains('Swag Lab').should('be.visible');
    cy.get('#login-button').should('be.visible'); // Check if the login button is visible
  });
});
