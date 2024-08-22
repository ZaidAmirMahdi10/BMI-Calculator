// // stryker.conf.js
// module.exports = {
//   packageManager: 'yarn',
//   reporters: ['progress', 'clear-text', 'html'],
//   testRunner: 'jest',
//   coverageAnalysis: 'perTest',
//   mutate: ['src/**/*.js', '!src/App.test.js'],
//   jest: {
//     projectType: 'custom',
//     configFile: 'jest.config.js', 
//     enableFindRelatedTests: false,
//   },
// };


module.exports = {
  mutate: ["src/**/*.js", "!src/**/*.test.js", "!src/**/*.spec.js"],
  packageManager: 'yarn',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'jest',
  coverageAnalysis: 'off',
};

