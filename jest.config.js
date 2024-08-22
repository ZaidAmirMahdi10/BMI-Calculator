// jest.config.js
module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js', 
    '\\.svg$': '<rootDir>/__mocks__/fileMock.js',  
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ["@testing-library/jest-dom"]
};
