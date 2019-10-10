context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should be all components visible', () => {
    cy.get('[data-cy="breadcrumbs"]').should('be.visible')
    cy.get('[data-cy="footer"]').should('be.visible')
    cy.get('[data-cy="header"]').should('be.visible')
    cy.get('[data-cy="menu"]').should('be.visible')
    cy.get('[data-cy="home"]').should('be.visible')
    cy.get('[data-cy="new-favorite"]').should('be.visible')
  })

  it('Should be open modal and visible', () => {
    cy.get('[data-cy="new-favorite"]').click()
    cy.get('[data-cy="modal"]').should('be.visible')
  })

  it('Should be all filter components visible', () => {
    cy.get('[data-cy="new-favorite"]').click()

    cy.get('[data-cy="city"]').should('be.visible')
    cy.get('[data-cy="course"]').should('be.visible')
    cy.get('[data-cy="label-checkbox-presencial"]').should('be.visible')
    cy.get('[data-cy="label-checkbox-distance"]').should('be.visible')
    cy.get('[data-cy="price"]').should('be.visible')
  })

  it('Should be load universities', () => {
    cy.server()
    cy.route('GET', '**/api/redealumni/scholarships').as('loadUniversities')

    cy.get('[data-cy="new-favorite"]').click()
    cy.wait('@loadUniversities').should(({ status }) => {
      expect(status).to.eq(200)
    })
  })

  it('Should be disabled button to add favorite', () => {
    cy.get('.yellow').should('be.disabled')
  })

  it('Should be add favorite univeristy', () => {
    cy.get('[data-cy="new-favorite"]').click()
    cy.get('[data-cy=label-checkbox-1]').click()
    cy.get('.yellow').click()
    cy.get('[data-cy="favorite-0"]').should('be.visible')
  })

  it('Should be remove favorite univeristy', () => {
    cy.get('[data-cy="new-favorite"]').click()
    cy.get('[data-cy=label-checkbox-1]').click()
    cy.get('.yellow').click()
    cy.get('[data-cy="favorite-0"]').should('be.visible')
    cy.get('[data-cy="btn-remove"]').click()
    cy.get('[data-cy="favorite-0"]').should('not.be.visible')
  })
})