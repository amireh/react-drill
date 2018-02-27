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
function findComponentsByType(component, type, cond, parentNodes) {
  var children = DOM.scryRenderedComponentsWithType(component, type);
  var childrenDOMNodes = children.map(function(child) {
    return DOM.findDOMNode(child);
  });

  var childrenInDOM = parentNodes ? (
    children.filter(function(childComponent, index) {
      return isDOMDescendantOf(parentNodes, childrenDOMNodes[index]);
    })
  ) : (
    children
  );

  var match = getPredicate(cond);

  if (!match) {
    return childrenInDOM;
  }
  else {
    return childrenInDOM.filter(function(child, index) {
      return match(childrenDOMNodes[index], index, child.props);
    });
  }
}

module.exports = findComponentsByType;

function isDOMDescendantOf(parentNodes, node) {
  return parentNodes.some(function(parentNode) {
    return parentNode.contains(node);
  });
}
