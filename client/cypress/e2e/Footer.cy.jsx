

describe('Footer Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays footer content correctly', () => {
    cy.get('footer').should('exist');
    cy.get('[data-cy="title"]').should('contain', 'House Staff');
    cy.get('footer').contains('Телефон: +380 44 123 4567').should('be.visible');
    cy.get('footer').contains('Email: info@housestaff.com').should('be.visible');
  });
});
