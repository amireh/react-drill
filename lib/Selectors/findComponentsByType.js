var $ = require("jquery");
var DOM = require('../DOM');

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
 * @memberOf Selectors
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
  var children = DOM.scryRenderedComponentsWithType(component, type);
  var match = getPredicate(cond);

  if (!match) {
    return children;
  }
  else {
    return children.filter(function(child, index) {
      return match(DOM.findDOMNode(child), index, child.props);
    });
  }
}

module.exports = findComponentsByType;
