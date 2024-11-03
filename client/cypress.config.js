const { defineConfig } = require('cypress');
const webpackConfig = require('./config/webpack.cypress.config');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig,
    },
    supportFile: './cypress/support/component.js',
    specPattern: ['src/**/*.cy.{js,jsx}'],
    setupNodeEvents(on, config) {
      // component testing node events setup code
      require('@cypress/code-coverage/task')(on, config);

      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

      return config;
    },
  },
  
  e2e: {
    baseUrl: 'http://localhost:3001', // Add your base URL here, or modify as needed
    supportFile: './cypress/support/e2e.js', // Optional: specify e2e support file
    specPattern: ['cypress/e2e/**/*.cy.{js,jsx}'], // Optional: specify e2e test pattern
    setupNodeEvents(on, config) {
      // Add any e2e-specific node event listeners here if needed
    },
  },
});
