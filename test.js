const tests = require.context('./lib', true, /.test.js$/);
tests.keys().forEach(tests);