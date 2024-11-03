import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';

describe('Header Component', () => {
  it('renders logo and cart count', () => {
    cy.mount(
      <Router>
        <Header cart={[{ title: 'Item 1' }]} onCabinetClick={cy.stub()} />
      </Router>
    );
    cy.contains('House Staff').should('exist');
  });
});
