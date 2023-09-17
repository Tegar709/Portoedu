const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH = '#searchTerm'

class Search {
    static visit() {
        cy.visit(URL);
        return this
    }

    static search() {
        cy.get(SEARCH).type('bank');
        cy.get(SEARCH).type('{enter}');
        return this
    }

    static searchresult() {
        cy.contains('Search Results:').should('be.visible');
        cy.contains('Zero - Personal Banking - Loans - Credit Cards').should('be.visible');
  
        return this
    }

    
}

export default Search;


  
  
   
   
  
  
  