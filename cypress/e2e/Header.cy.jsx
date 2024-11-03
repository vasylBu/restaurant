describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('/'); // Visit the root page where Header is rendered
  });

  it('navigates to the "About" page', () => {
    cy.get('[data-cy="about-link"]').click();
    cy.url().should('include', '/about');
  });

  it('toggles the cart dropdown visibility', () => {
    cy.get('[data-cy="cart-icon"]').click();
    cy.get('[data-cy="cart-dropdown"]').should('be.visible');


    cy.get('[data-cy="close-cart"]').click();
    cy.get('[data-cy="cart-dropdown"]').should('not.exist');
  });

  it('displays correct cart item count', () => {
    cy.get('[data-cy="cart-icon"]').click();
  });
});
