it('Add a new user', () => {
  var user = {
      "name": 'Fathur Rohim',
      "job": 'Test Engineer'
  } 
  cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
      expect(response.status).equal(201)
      expect(response.body).to.have.property('name', 'Fathur Rohim');
      expect(response.body).to.have.property('job', 'Test Engineer');
      expect(response.body).to.have.property('id').to.be.a('string');
  })
})
