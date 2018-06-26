window.assert = require('chai').assert;

const allTests = [
  require.context('../lib', true, /.test.js$/),
  require.context('../addons/cheerio/__tests__', true, /\.test\.js$/),
  require.context('../addons/pikaday/__tests__', true, /\.test\.js$/),
]

allTests.forEach(tests => {
  tests.keys().forEach(tests)
})