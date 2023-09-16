const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the homepage', () => {
  cy.visit('http://zero.webappsecurity.com/index.html');
});

When('I type "bank" in the search bar', () => {
 
  cy.get('#searchTerm').type('bank');
 
  cy.get('#searchTerm').type('{enter}');
});

Then('I should see search results "Zero - Personal Banking - Loans - Credit Cards"', () => {
  
  cy.contains('Search Results:').should('be.visible');
 
  cy.contains('Zero - Personal Banking - Loans - Credit Cards').should('be.visible');
});