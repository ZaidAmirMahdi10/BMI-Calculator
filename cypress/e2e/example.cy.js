// cypress/e2e/example.cy.js
describe('Example Test', () => {
    it('should load the app', () => {
      cy.visit('http://localhost:3000'); // Adjust the URL to match your app's URL
      cy.contains('BMI Calculator'); // This is just an example test
    });
  });
  