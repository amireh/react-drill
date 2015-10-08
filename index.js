var Scope = require('./lib/Scope');
var DOMHelpers = require('./lib/DOMHelpers');

// register all the DOMHelpers instance methods by default
Object.keys(DOMHelpers).forEach(function(method) {
  Scope.registerHTMLElementMethod(method, DOMHelpers[method]);
});

function drill(component) {
  return new Scope(component);
}

drill.DOMHelpers = DOMHelpers;
drill.DOMSelectors = require('./lib/DOMSelectors');

// these two shortcuts for destructuring convenience:
//
//     const { drill, m } = require('react-drill');
drill.drill = drill;
drill.m = require('./lib/matchers');

module.exports = drill;
