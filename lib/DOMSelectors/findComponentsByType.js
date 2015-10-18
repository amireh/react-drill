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

/**
 * @memberOf DOMSelectors
 *
 * Find all rendered components of a certain type.
 *
 * @param  {React.Component} component
 * @param  {React.Class} type
 * @param  {Function} [cond]
 *         An optional [Matchers matcher]().
 *
 * @return {React.Component[]}
 */
function findComponentsByType(component, type, cond) {
  var children = ReactTestUtils.scryRenderedComponentsWithType(component, type);
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