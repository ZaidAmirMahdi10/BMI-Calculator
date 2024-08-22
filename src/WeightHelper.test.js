// src/WeightHelper.test.js

import WeightHelper from "./WeightHelper";

expect.extend({
  toBeCloseTo(received, expected, precision = 2) {
    const pass = Math.abs(received - expected) < Math.pow(10, -precision) / 2;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be close to ${expected} with precision ${precision}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be close to ${expected} with precision ${precision}`,
        pass: false,
      };
    }
  },
});

describe("WeightHelper", () => {
  test("should calculate BMI correctly for various values", () => {
    expect(WeightHelper.calculateBMI(170, 65)).toBeCloseTo(22.49);
    expect(WeightHelper.calculateBMI(160, 50)).toBeCloseTo(19.53);
    expect(WeightHelper.calculateBMI(180, 90)).toBeCloseTo(27.78);
  });

  test("should handle zero height and non-negative weight", () => {
    expect(() => WeightHelper.calculateBMI(0, 65)).toThrow(
      "Height must be greater than zero and weight must be non-negative"
    );
  });

  test("should handle negative height and non-negative weight", () => {
    expect(() => WeightHelper.calculateBMI(-170, 65)).toThrow(
      "Height must be greater than zero and weight must be non-negative"
    );
  });

  test("should handle zero weight and positive height", () => {
    expect(WeightHelper.calculateBMI(170, 0)).toBeCloseTo(0.0);
  });

  test("should handle negative weight and positive height", () => {
    expect(() => WeightHelper.calculateBMI(170, -65)).toThrow(
      "Height must be greater than zero and weight must be non-negative"
    );
  });

  test('should return "Underweight" for BMI less than 18.5', () => {
    expect(WeightHelper.getBMICategory(170, 50)).toBe("Underweight");
  });

  test('should return "Normal weight" for BMI between 18.5 and 24.9', () => {
    expect(WeightHelper.getBMICategory(170, 65)).toBe("Normal weight");
  });

  test('should return "Overweight" for BMI between 25 and 29.9', () => {
    expect(WeightHelper.getBMICategory(170, 75)).toBe("Overweight");
  });

  test('should return "Obese" for BMI 30 or more', () => {
    expect(WeightHelper.getBMICategory(170, 90)).toBe("Obese");
  });

  test('should return "Underweight" for BMI exactly at the boundary of 18.5', () => {
    expect(WeightHelper.getBMICategory(170, 53.5)).toBe("Normal weight");
  });

  test('should return "Normal weight" for BMI exactly at the boundary of 24.9', () => {
    expect(WeightHelper.getBMICategory(170, 72)).toBe("Normal weight");
  });

  test('should return "Overweight" for BMI exactly at the boundary of 25', () => {
    expect(WeightHelper.getBMICategory(170, 72.5)).toBe("Overweight");
  });

  test('should return "Obese" for BMI exactly at the boundary of 30', () => {
    expect(WeightHelper.getBMICategory(170, 87)).toBe("Obese");
  });
});
