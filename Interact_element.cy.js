describe('Working with input', () => {
  beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/login.html')
      cy.url().should('include', 'login.html')
  })

  it('should fill username and password and check Remember Me', () => {
      cy.get('#user_login').clear().type('username')
      cy.get('#user_password').clear().type('password')
      cy.get('#user_remember_me').check().should('be.checked')
  })
})