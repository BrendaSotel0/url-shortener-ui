describe('load page flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', { fixture: 'getData.json' })
    cy.visit('http://localhost:3000')
  })

  it('should have a header and two cards on load', () => {
    cy.contains('URL Shortener')
    cy.get('.url').first()
    .contains('UI')
    cy.get('.url').last()
    .contains('API')
  })

  it('should see a form on load', () => {
    cy.get('form')
    cy.get('.title-input')
    cy.get('.long-url-input')
  })

  it('should be able to add a url card and see it displayed', () => {
    cy.get('.title-input').type('Fresh Title')
    cy.get('.long-url-input').type('freshtitle.com')
    cy.get('.submit-button').click()
    cy.get('.url').last()
    .contains('Fresh Title')
  })

  it('should see the inputted card', () => {
    cy.get('.title-input').type('Newest Title')
    cy.get('.long-url-input').type('newesttitle.com')
    cy.get('.submit-button').click()
    cy.get('.url').last()
    .contains('Newest Title')
  })

})