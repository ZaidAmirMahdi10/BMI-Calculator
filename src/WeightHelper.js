// src/WeightHelper.js

class WeightHelper {
    static calculateBMI(height, weight) {
      if (height <= 0 || weight < 0) {
        throw new Error('Height must be greater than zero and weight must be non-negative');
      }
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters ** 2);
      return parseFloat(bmi.toFixed(2));
    }
  
    static getBMICategory(height, weight) {
      const bmi = this.calculateBMI(height, weight);
  
      if (bmi < 18.5) {
        return "Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
      } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
      } else {
        return "Obese";
      }
    }
  }
  
  export default WeightHelper;
  