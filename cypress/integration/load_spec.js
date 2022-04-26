describe('load page flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', { fixture: 'getData.json' })
    cy.visit('http://localhost:3000')
  })

  it('should have a header on load', () => {
    cy.contains('URL Shortener')
  })

  it('should see a form on load', () => {
    cy.get('form')
    cy.get('.title-input')
    cy.get('.long-url-input')
  })

})