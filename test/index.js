window.assert = require('chai').assert;

const tests = require.context('../lib', true, /.test.js$/);
tests.keys().forEach(tests);