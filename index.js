var DOMHelpers = require('./lib/DOMHelpers');
var Drill = require('./lib/Drill');

var HTMLElementMethods = [
  'blur',
  'change',
  'click',
  'fillIn',
  'focus',
  'keyDown',
  'keyUp',
  'mouseDown',
  'mouseEnter',
  'mouseLeave',
  'mouseTransition',
  'mouseUp',
  'select',
  'submit',
  'typeIn',
];

// register all the DOMHelpers instance methods by default
HTMLElementMethods.forEach(function(method) {
  Drill.registerHTMLElementMethod(method, DOMHelpers[method]);
});

function drill(component) {
  return new Drill(component);
}

module.exports = drill;
module.exports.DOMHelpers = DOMHelpers;

// these two shortcuts for convenience destructuring:
// { drill, m } = require('react-drill');
module.exports.drill = drill;
module.exports.m = require('./lib/matchers');
