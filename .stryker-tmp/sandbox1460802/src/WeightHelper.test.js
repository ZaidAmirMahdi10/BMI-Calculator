// @ts-nocheck
// src/WeightHelper.test.js
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
import WeightHelper from "./WeightHelper";
expect.extend(stryMutAct_9fa48("76") ? {} : (stryCov_9fa48("76"), {
  toBeCloseTo(received, expected, precision = 2) {
    if (stryMutAct_9fa48("77")) {
      {}
    } else {
      stryCov_9fa48("77");
      const pass = stryMutAct_9fa48("81") ? Math.abs(received - expected) >= Math.pow(10, -precision) / 2 : stryMutAct_9fa48("80") ? Math.abs(received - expected) <= Math.pow(10, -precision) / 2 : stryMutAct_9fa48("79") ? false : stryMutAct_9fa48("78") ? true : (stryCov_9fa48("78", "79", "80", "81"), Math.abs(stryMutAct_9fa48("82") ? received + expected : (stryCov_9fa48("82"), received - expected)) < (stryMutAct_9fa48("83") ? Math.pow(10, -precision) * 2 : (stryCov_9fa48("83"), Math.pow(10, stryMutAct_9fa48("84") ? +precision : (stryCov_9fa48("84"), -precision)) / 2)));
      if (stryMutAct_9fa48("86") ? false : stryMutAct_9fa48("85") ? true : (stryCov_9fa48("85", "86"), pass)) {
        if (stryMutAct_9fa48("87")) {
          {}
        } else {
          stryCov_9fa48("87");
          return stryMutAct_9fa48("88") ? {} : (stryCov_9fa48("88"), {
            message: stryMutAct_9fa48("89") ? () => undefined : (stryCov_9fa48("89"), () => stryMutAct_9fa48("90") ? `` : (stryCov_9fa48("90"), `expected ${received} not to be close to ${expected} with precision ${precision}`)),
            pass: stryMutAct_9fa48("91") ? false : (stryCov_9fa48("91"), true)
          });
        }
      } else {
        if (stryMutAct_9fa48("92")) {
          {}
        } else {
          stryCov_9fa48("92");
          return stryMutAct_9fa48("93") ? {} : (stryCov_9fa48("93"), {
            message: stryMutAct_9fa48("94") ? () => undefined : (stryCov_9fa48("94"), () => stryMutAct_9fa48("95") ? `` : (stryCov_9fa48("95"), `expected ${received} to be close to ${expected} with precision ${precision}`)),
            pass: stryMutAct_9fa48("96") ? true : (stryCov_9fa48("96"), false)
          });
        }
      }
    }
  }
}));
describe(stryMutAct_9fa48("97") ? "" : (stryCov_9fa48("97"), "WeightHelper"), () => {
  if (stryMutAct_9fa48("98")) {
    {}
  } else {
    stryCov_9fa48("98");
    test(stryMutAct_9fa48("99") ? "" : (stryCov_9fa48("99"), "should calculate BMI correctly for various values"), () => {
      if (stryMutAct_9fa48("100")) {
        {}
      } else {
        stryCov_9fa48("100");
        expect(WeightHelper.calculateBMI(170, 65)).toBeCloseTo(22.49);
        expect(WeightHelper.calculateBMI(160, 50)).toBeCloseTo(19.53);
        expect(WeightHelper.calculateBMI(180, 90)).toBeCloseTo(27.78);
      }
    });
    test(stryMutAct_9fa48("101") ? "" : (stryCov_9fa48("101"), "should handle zero height and non-negative weight"), () => {
      if (stryMutAct_9fa48("102")) {
        {}
      } else {
        stryCov_9fa48("102");
        expect(stryMutAct_9fa48("103") ? () => undefined : (stryCov_9fa48("103"), () => WeightHelper.calculateBMI(0, 65))).toThrow(stryMutAct_9fa48("104") ? "" : (stryCov_9fa48("104"), "Height must be greater than zero and weight must be non-negative"));
      }
    });
    test(stryMutAct_9fa48("105") ? "" : (stryCov_9fa48("105"), "should handle negative height and non-negative weight"), () => {
      if (stryMutAct_9fa48("106")) {
        {}
      } else {
        stryCov_9fa48("106");
        expect(stryMutAct_9fa48("107") ? () => undefined : (stryCov_9fa48("107"), () => WeightHelper.calculateBMI(stryMutAct_9fa48("108") ? +170 : (stryCov_9fa48("108"), -170), 65))).toThrow(stryMutAct_9fa48("109") ? "" : (stryCov_9fa48("109"), "Height must be greater than zero and weight must be non-negative"));
      }
    });
    test(stryMutAct_9fa48("110") ? "" : (stryCov_9fa48("110"), "should handle zero weight and positive height"), () => {
      if (stryMutAct_9fa48("111")) {
        {}
      } else {
        stryCov_9fa48("111");
        expect(WeightHelper.calculateBMI(170, 0)).toBeCloseTo(0.0);
      }
    });
    test(stryMutAct_9fa48("112") ? "" : (stryCov_9fa48("112"), "should handle negative weight and positive height"), () => {
      if (stryMutAct_9fa48("113")) {
        {}
      } else {
        stryCov_9fa48("113");
        expect(stryMutAct_9fa48("114") ? () => undefined : (stryCov_9fa48("114"), () => WeightHelper.calculateBMI(170, stryMutAct_9fa48("115") ? +65 : (stryCov_9fa48("115"), -65)))).toThrow(stryMutAct_9fa48("116") ? "" : (stryCov_9fa48("116"), "Height must be greater than zero and weight must be non-negative"));
      }
    });
    test(stryMutAct_9fa48("117") ? "" : (stryCov_9fa48("117"), 'should return "Underweight" for BMI less than 18.5'), () => {
      if (stryMutAct_9fa48("118")) {
        {}
      } else {
        stryCov_9fa48("118");
        expect(WeightHelper.getBMICategory(170, 50)).toBe(stryMutAct_9fa48("119") ? "" : (stryCov_9fa48("119"), "Underweight"));
      }
    });
    test(stryMutAct_9fa48("120") ? "" : (stryCov_9fa48("120"), 'should return "Normal weight" for BMI between 18.5 and 24.9'), () => {
      if (stryMutAct_9fa48("121")) {
        {}
      } else {
        stryCov_9fa48("121");
        expect(WeightHelper.getBMICategory(170, 65)).toBe(stryMutAct_9fa48("122") ? "" : (stryCov_9fa48("122"), "Normal weight"));
      }
    });
    test(stryMutAct_9fa48("123") ? "" : (stryCov_9fa48("123"), 'should return "Overweight" for BMI between 25 and 29.9'), () => {
      if (stryMutAct_9fa48("124")) {
        {}
      } else {
        stryCov_9fa48("124");
        expect(WeightHelper.getBMICategory(170, 75)).toBe(stryMutAct_9fa48("125") ? "" : (stryCov_9fa48("125"), "Overweight"));
      }
    });
    test(stryMutAct_9fa48("126") ? "" : (stryCov_9fa48("126"), 'should return "Obese" for BMI 30 or more'), () => {
      if (stryMutAct_9fa48("127")) {
        {}
      } else {
        stryCov_9fa48("127");
        expect(WeightHelper.getBMICategory(170, 90)).toBe(stryMutAct_9fa48("128") ? "" : (stryCov_9fa48("128"), "Obese"));
      }
    });
    test(stryMutAct_9fa48("129") ? "" : (stryCov_9fa48("129"), 'should return "Underweight" for BMI exactly at the boundary of 18.5'), () => {
      if (stryMutAct_9fa48("130")) {
        {}
      } else {
        stryCov_9fa48("130");
        expect(WeightHelper.getBMICategory(170, 53.5)).toBe(stryMutAct_9fa48("131") ? "" : (stryCov_9fa48("131"), "Normal weight"));
      }
    });
    test(stryMutAct_9fa48("132") ? "" : (stryCov_9fa48("132"), 'should return "Normal weight" for BMI exactly at the boundary of 24.9'), () => {
      if (stryMutAct_9fa48("133")) {
        {}
      } else {
        stryCov_9fa48("133");
        expect(WeightHelper.getBMICategory(170, 72)).toBe(stryMutAct_9fa48("134") ? "" : (stryCov_9fa48("134"), "Normal weight"));
      }
    });
    test(stryMutAct_9fa48("135") ? "" : (stryCov_9fa48("135"), 'should return "Overweight" for BMI exactly at the boundary of 25'), () => {
      if (stryMutAct_9fa48("136")) {
        {}
      } else {
        stryCov_9fa48("136");
        expect(WeightHelper.getBMICategory(170, 72.5)).toBe(stryMutAct_9fa48("137") ? "" : (stryCov_9fa48("137"), "Overweight"));
      }
    });
    test(stryMutAct_9fa48("138") ? "" : (stryCov_9fa48("138"), 'should return "Obese" for BMI exactly at the boundary of 30'), () => {
      if (stryMutAct_9fa48("139")) {
        {}
      } else {
        stryCov_9fa48("139");
        expect(WeightHelper.getBMICategory(170, 87)).toBe(stryMutAct_9fa48("140") ? "" : (stryCov_9fa48("140"), "Obese"));
      }
    });
  }
});