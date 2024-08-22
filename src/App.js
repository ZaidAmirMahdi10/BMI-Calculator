// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import BMICalculator from './BMICalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BMICalculator />
      </header>
    </div>
  );
}

export default App;
