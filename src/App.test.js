// src/App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders BMI Calculator header', () => {
  render(<App />);
  const headerElement = screen.getByText(/BMI Calculator/i);
  expect(headerElement).toBeInTheDocument();
  expect(headerElement.tagName).toBe('H1'); 
});

test('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
