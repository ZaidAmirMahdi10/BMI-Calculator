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
    if (stryMutAct_9fa48("26")) {
      {}
    } else {
      stryCov_9fa48("26");
      if (stryMutAct_9fa48("29") ? height <= 0 && weight < 0 : stryMutAct_9fa48("28") ? false : stryMutAct_9fa48("27") ? true : (stryCov_9fa48("27", "28", "29"), (stryMutAct_9fa48("32") ? height > 0 : stryMutAct_9fa48("31") ? height < 0 : stryMutAct_9fa48("30") ? false : (stryCov_9fa48("30", "31", "32"), height <= 0)) || (stryMutAct_9fa48("35") ? weight >= 0 : stryMutAct_9fa48("34") ? weight <= 0 : stryMutAct_9fa48("33") ? false : (stryCov_9fa48("33", "34", "35"), weight < 0)))) {
        if (stryMutAct_9fa48("36")) {
          {}
        } else {
          stryCov_9fa48("36");
          throw new Error(stryMutAct_9fa48("37") ? "" : (stryCov_9fa48("37"), 'Height must be greater than zero and weight must be non-negative'));
        }
      }
      const heightInMeters = stryMutAct_9fa48("38") ? height * 100 : (stryCov_9fa48("38"), height / 100);
      const bmi = stryMutAct_9fa48("39") ? weight * heightInMeters ** 2 : (stryCov_9fa48("39"), weight / heightInMeters ** 2);
      return parseFloat(bmi.toFixed(2));
    }
  }
  static getBMICategory(height, weight) {
    if (stryMutAct_9fa48("40")) {
      {}
    } else {
      stryCov_9fa48("40");
      const bmi = this.calculateBMI(height, weight);
      if (stryMutAct_9fa48("44") ? bmi >= 18.5 : stryMutAct_9fa48("43") ? bmi <= 18.5 : stryMutAct_9fa48("42") ? false : stryMutAct_9fa48("41") ? true : (stryCov_9fa48("41", "42", "43", "44"), bmi < 18.5)) {
        if (stryMutAct_9fa48("45")) {
          {}
        } else {
          stryCov_9fa48("45");
          return stryMutAct_9fa48("46") ? "" : (stryCov_9fa48("46"), "Underweight");
        }
      } else if (stryMutAct_9fa48("49") ? bmi >= 18.5 || bmi < 25 : stryMutAct_9fa48("48") ? false : stryMutAct_9fa48("47") ? true : (stryCov_9fa48("47", "48", "49"), (stryMutAct_9fa48("52") ? bmi < 18.5 : stryMutAct_9fa48("51") ? bmi > 18.5 : stryMutAct_9fa48("50") ? true : (stryCov_9fa48("50", "51", "52"), bmi >= 18.5)) && (stryMutAct_9fa48("55") ? bmi >= 25 : stryMutAct_9fa48("54") ? bmi <= 25 : stryMutAct_9fa48("53") ? true : (stryCov_9fa48("53", "54", "55"), bmi < 25)))) {
        if (stryMutAct_9fa48("56")) {
          {}
        } else {
          stryCov_9fa48("56");
          return stryMutAct_9fa48("57") ? "" : (stryCov_9fa48("57"), "Normal weight");
        }
      } else if (stryMutAct_9fa48("60") ? bmi >= 25 || bmi < 30 : stryMutAct_9fa48("59") ? false : stryMutAct_9fa48("58") ? true : (stryCov_9fa48("58", "59", "60"), (stryMutAct_9fa48("63") ? bmi < 25 : stryMutAct_9fa48("62") ? bmi > 25 : stryMutAct_9fa48("61") ? true : (stryCov_9fa48("61", "62", "63"), bmi >= 25)) && (stryMutAct_9fa48("66") ? bmi >= 30 : stryMutAct_9fa48("65") ? bmi <= 30 : stryMutAct_9fa48("64") ? true : (stryCov_9fa48("64", "65", "66"), bmi < 30)))) {
        if (stryMutAct_9fa48("67")) {
          {}
        } else {
          stryCov_9fa48("67");
          return stryMutAct_9fa48("68") ? "" : (stryCov_9fa48("68"), "Overweight");
        }
      } else {
        if (stryMutAct_9fa48("69")) {
          {}
        } else {
          stryCov_9fa48("69");
          return stryMutAct_9fa48("70") ? "" : (stryCov_9fa48("70"), "Obese");
        }
      }
    }
  }
}
export default WeightHelper;