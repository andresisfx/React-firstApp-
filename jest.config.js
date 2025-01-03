module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/(?!(modulo-especifico)/)'],
    setupFiles: ['./jest.setup.js'],
  };