// setup file for testing with Mocha and Chai

// register babel to transpile before our test run.
require('babel-register')();

// Disable Webpack features that Mocha doesn't understand
require.extensions['.css'] = function () {};
