import React from 'react';

import Footer from './Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    cy.mount(<Footer />);
  });
  it('should render correct count of NavLinks', () => {
    cy.getByDataCy('title').should('exist');
  });
});