/// <reference types="cypress" />


describe('Login and Logout', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html');
    cy.url().should('include', '/index.html');
    cy.get('#signin_button').click();
  });

  it('should login with invalid data', () => {
    cy.get('#login_form').should('be.visible');
    cy.get('#user_login').type('invalid username');
    cy.get('#user_password').type('invalid password');
    cy.contains('Sign in').click();
    cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.');

    cy.wait(2000);
  });

  it('should login to the application with valid data from fixture', () => {
    cy.fixture('user').then((user) => {
      const username = user.username;
      const password = user.password;

      cy.get('#user_login').clear().type(username);
      cy.get('#user_password').clear().type(password);
      cy.contains('Sign in').click(); 
      cy.get('h2').should('have.text', 'Cash Account:');
    });
  });

  it('should logout from the application', () => {
    cy.contains('username').click();
    cy.get('#logout_link').click();

    cy.get('#signin_button').should('be.visible');
  });
});
