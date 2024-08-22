// src/BMICalculator.js

import React, { useState } from 'react';
import WeightHelper from './WeightHelper';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const handleCalculate = () => {
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    if (isNaN(heightNum) || isNaN(weightNum) || heightNum <= 0 || weightNum < 0) {
      alert('Please enter valid height and weight');
      return;
    }

    const bmiValue = WeightHelper.calculateBMI(heightNum, weightNum);
    const bmiCategory = WeightHelper.getBMICategory(heightNum, weightNum);

    setBMI(bmiValue);
    setCategory(bmiCategory);
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <div>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleCalculate}>Calculate BMI</button>
      {bmi && (
        <div>
          <h2>Your BMI: {bmi}</h2>
          <h3>Category: {category}</h3>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
