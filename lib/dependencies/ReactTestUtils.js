var apis = [
  'scryRenderedComponentsWithType',
  'Simulate',
  'SimulateNative',
]
var injection = null

module.exports = function(ReactTestUtils) {
  injection = ReactTestUtils
}

apis.forEach(function(api) {
  Object.defineProperty(module.exports, api, {
    configurable: false,
    enumerable: false,
    get: function() {
      return injection ? injection[api] : require('react-dom/test-utils')[api]
    }
  })
})
