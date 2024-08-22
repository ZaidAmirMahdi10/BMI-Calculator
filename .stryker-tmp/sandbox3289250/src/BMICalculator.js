// @ts-nocheck
// src/BMICalculator.js
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import React, { useState } from 'react';
import WeightHelper from './WeightHelper';
const BMICalculator = () => {
  if (stryMutAct_9fa48("6")) {
    {}
  } else {
    stryCov_9fa48("6");
    const [height, setHeight] = useState(stryMutAct_9fa48("7") ? "Stryker was here!" : (stryCov_9fa48("7"), ''));
    const [weight, setWeight] = useState(stryMutAct_9fa48("8") ? "Stryker was here!" : (stryCov_9fa48("8"), ''));
    const [bmi, setBMI] = useState(null);
    const [category, setCategory] = useState(stryMutAct_9fa48("9") ? "Stryker was here!" : (stryCov_9fa48("9"), ''));
    const handleCalculate = () => {
      if (stryMutAct_9fa48("10")) {
        {}
      } else {
        stryCov_9fa48("10");
        const heightNum = parseFloat(height);
        const weightNum = parseFloat(weight);
        if (stryMutAct_9fa48("13") ? (isNaN(heightNum) || isNaN(weightNum) || heightNum <= 0) && weightNum < 0 : stryMutAct_9fa48("12") ? false : stryMutAct_9fa48("11") ? true : (stryCov_9fa48("11", "12", "13"), (stryMutAct_9fa48("15") ? (isNaN(heightNum) || isNaN(weightNum)) && heightNum <= 0 : stryMutAct_9fa48("14") ? false : (stryCov_9fa48("14", "15"), (stryMutAct_9fa48("17") ? isNaN(heightNum) && isNaN(weightNum) : stryMutAct_9fa48("16") ? false : (stryCov_9fa48("16", "17"), isNaN(heightNum) || isNaN(weightNum))) || (stryMutAct_9fa48("20") ? heightNum > 0 : stryMutAct_9fa48("19") ? heightNum < 0 : stryMutAct_9fa48("18") ? false : (stryCov_9fa48("18", "19", "20"), heightNum <= 0)))) || (stryMutAct_9fa48("23") ? weightNum >= 0 : stryMutAct_9fa48("22") ? weightNum <= 0 : stryMutAct_9fa48("21") ? false : (stryCov_9fa48("21", "22", "23"), weightNum < 0)))) {
          if (stryMutAct_9fa48("24")) {
            {}
          } else {
            stryCov_9fa48("24");
            alert(stryMutAct_9fa48("25") ? "" : (stryCov_9fa48("25"), 'Please enter valid height and weight'));
            return;
          }
        }
        const bmiValue = WeightHelper.calculateBMI(heightNum, weightNum);
        const bmiCategory = WeightHelper.getBMICategory(heightNum, weightNum);
        setBMI(bmiValue);
        setCategory(bmiCategory);
      }
    };
    return <div>
      <h1>BMI Calculator</h1>
      <div>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={stryMutAct_9fa48("26") ? () => undefined : (stryCov_9fa48("26"), e => setHeight(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={stryMutAct_9fa48("27") ? () => undefined : (stryCov_9fa48("27"), e => setWeight(e.target.value))} />
        </label>
      </div>
      <button onClick={handleCalculate}>Calculate BMI</button>
      {stryMutAct_9fa48("30") ? bmi || <div>
          <h2>Your BMI: {bmi}</h2>
          <h3>Category: {category}</h3>
        </div> : stryMutAct_9fa48("29") ? false : stryMutAct_9fa48("28") ? true : (stryCov_9fa48("28", "29", "30"), bmi && <div>
          <h2>Your BMI: {bmi}</h2>
          <h3>Category: {category}</h3>
        </div>)}
    </div>;
  }
};
export default BMICalculator;