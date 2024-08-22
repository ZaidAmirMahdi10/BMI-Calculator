// @ts-nocheck
// src/WeightHelper.js
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
class WeightHelper {
  static calculateBMI(height, weight) {
    if (stryMutAct_9fa48("31")) {
      {}
    } else {
      stryCov_9fa48("31");
      if (stryMutAct_9fa48("34") ? height <= 0 && weight < 0 : stryMutAct_9fa48("33") ? false : stryMutAct_9fa48("32") ? true : (stryCov_9fa48("32", "33", "34"), (stryMutAct_9fa48("37") ? height > 0 : stryMutAct_9fa48("36") ? height < 0 : stryMutAct_9fa48("35") ? false : (stryCov_9fa48("35", "36", "37"), height <= 0)) || (stryMutAct_9fa48("40") ? weight >= 0 : stryMutAct_9fa48("39") ? weight <= 0 : stryMutAct_9fa48("38") ? false : (stryCov_9fa48("38", "39", "40"), weight < 0)))) {
        if (stryMutAct_9fa48("41")) {
          {}
        } else {
          stryCov_9fa48("41");
          throw new Error(stryMutAct_9fa48("42") ? "" : (stryCov_9fa48("42"), 'Height must be greater than zero and weight must be non-negative'));
        }
      }
      const heightInMeters = stryMutAct_9fa48("43") ? height * 100 : (stryCov_9fa48("43"), height / 100);
      const bmi = stryMutAct_9fa48("44") ? weight * heightInMeters ** 2 : (stryCov_9fa48("44"), weight / heightInMeters ** 2);
      return parseFloat(bmi.toFixed(2));
    }
  }
  static getBMICategory(height, weight) {
    if (stryMutAct_9fa48("45")) {
      {}
    } else {
      stryCov_9fa48("45");
      const bmi = this.calculateBMI(height, weight);
      if (stryMutAct_9fa48("49") ? bmi >= 18.5 : stryMutAct_9fa48("48") ? bmi <= 18.5 : stryMutAct_9fa48("47") ? false : stryMutAct_9fa48("46") ? true : (stryCov_9fa48("46", "47", "48", "49"), bmi < 18.5)) {
        if (stryMutAct_9fa48("50")) {
          {}
        } else {
          stryCov_9fa48("50");
          return stryMutAct_9fa48("51") ? "" : (stryCov_9fa48("51"), "Underweight");
        }
      } else if (stryMutAct_9fa48("54") ? bmi >= 18.5 || bmi < 25 : stryMutAct_9fa48("53") ? false : stryMutAct_9fa48("52") ? true : (stryCov_9fa48("52", "53", "54"), (stryMutAct_9fa48("57") ? bmi < 18.5 : stryMutAct_9fa48("56") ? bmi > 18.5 : stryMutAct_9fa48("55") ? true : (stryCov_9fa48("55", "56", "57"), bmi >= 18.5)) && (stryMutAct_9fa48("60") ? bmi >= 25 : stryMutAct_9fa48("59") ? bmi <= 25 : stryMutAct_9fa48("58") ? true : (stryCov_9fa48("58", "59", "60"), bmi < 25)))) {
        if (stryMutAct_9fa48("61")) {
          {}
        } else {
          stryCov_9fa48("61");
          return stryMutAct_9fa48("62") ? "" : (stryCov_9fa48("62"), "Normal weight");
        }
      } else if (stryMutAct_9fa48("65") ? bmi >= 25 || bmi < 30 : stryMutAct_9fa48("64") ? false : stryMutAct_9fa48("63") ? true : (stryCov_9fa48("63", "64", "65"), (stryMutAct_9fa48("68") ? bmi < 25 : stryMutAct_9fa48("67") ? bmi > 25 : stryMutAct_9fa48("66") ? true : (stryCov_9fa48("66", "67", "68"), bmi >= 25)) && (stryMutAct_9fa48("71") ? bmi >= 30 : stryMutAct_9fa48("70") ? bmi <= 30 : stryMutAct_9fa48("69") ? true : (stryCov_9fa48("69", "70", "71"), bmi < 30)))) {
        if (stryMutAct_9fa48("72")) {
          {}
        } else {
          stryCov_9fa48("72");
          return stryMutAct_9fa48("73") ? "" : (stryCov_9fa48("73"), "Overweight");
        }
      } else {
        if (stryMutAct_9fa48("74")) {
          {}
        } else {
          stryCov_9fa48("74");
          return stryMutAct_9fa48("75") ? "" : (stryCov_9fa48("75"), "Obese");
        }
      }
    }
  }
}
export default WeightHelper;