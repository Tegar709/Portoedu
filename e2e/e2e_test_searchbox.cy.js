/// <reference types="cypress" />


describe('Search Box E2E Test', () => {
    before(() => {
      cy.visit('http://zero.webappsecurity.com/index.html');
    });
  
    it('should type into the search box and submit', () => {
      cy.get('#searchTerm').type('some text{enter}');
  
      
      cy.get('h2').should('have.text', 'Search Results:');
    });
  });
  