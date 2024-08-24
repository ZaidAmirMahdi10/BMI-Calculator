// cypress/integration/bmiCalculator.spec.js

describe('BMI Calculator', () => {
    it('should calculate BMI correctly', () => {
      cy.visit('/');
      cy.get('input').first().type('170');
      cy.get('input').last().type('65');
      cy.contains('Calculate BMI').click();
      cy.contains('Your BMI: 22.49').should('exist');
      cy.contains('Category: Normal weight').should('exist');
    });
  });
  