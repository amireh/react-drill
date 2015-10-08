var $ = require("jquery");
var React = require('react');
var ReactTestUtils = require("react/lib/ReactTestUtils");

function jQueryIs(selector, node) {
  return $(node).is(selector);
}

function getPredicate(cond) {
  if (cond) {
    if (cond instanceof Function) {
      return cond;
    }
    else {
      return jQueryIs.bind(null, cond);
    }
  }
}

function findComponentsByType(subject, type, cond) {
  var children = ReactTestUtils.scryRenderedComponentsWithType(subject, type);
  var match = getPredicate(cond);

  if (!match) {
    return children;
  }
  else {
    return children.filter(function(child) {
      return match(React.findDOMNode(child));
    });
  }
}

module.exports = findComponentsByType;