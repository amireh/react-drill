var ReactDOM = require('react-dom');
var DOM = require('../DOM');
var ReactTestUtils = require('../dependencies/ReactTestUtils');
var scryRenderedComponentsWithType = ReactTestUtils.scryRenderedComponentsWithType;

function getPredicate(cond) {
  if (cond) {
    if (cond instanceof Function) {
      return cond;
    }
    else {
      return function(node) {
        return DOM.is(node, cond);
      };
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
  var children = scryRenderedComponentsWithType(component, type);
  var childrenDOMNodes = children.map(function(child) {
    return ReactDOM.findDOMNode(child);
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
    return DOM.contains(parentNode, node);
  });
}
