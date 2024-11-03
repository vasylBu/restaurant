import '@cypress/code-coverage/support';
import './commands';

import { mount } from 'cypress/react18';

Cypress.Commands.add('mount', mount);

Cypress.Commands.add('getByDataCy', (selector) => cy.get(`[data-cy=${selector}]`));