/// <reference types="cypress" />

describe('Navbar test', function() {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html');
  });

  it('Should display online banking content', () => {
    cy.contains('Online Banking').click();
    cy.url().should('include', 'online-banking.html');
    cy.get('h1').should('be.visible');
    
    
    cy.contains('Our Bank is trusted by over 1,000,000 customers world wide. Sign in now!').should('be.visible');
  });

  it('Should display feedback content', () => {
    cy.contains('Feedback').click();
    cy.url().should('include', 'feedback.html');
    
    
    cy.get('h3').should('have.text', 'Feedback');
  });

  it('Should display homepage content', () => {
    cy.contains('Zero Bank').click();
    cy.url().should('include', 'index.html');
    
    
    cy.get('#account_activity_link').should('be.visible');

  });
});