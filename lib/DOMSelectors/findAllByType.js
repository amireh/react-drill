var React = require('react');
var findComponentsByType = require('./findComponentsByType');

/**
 * @memberOf DOMSelectors
 *
 * Find all DOM nodes that belong to a certain React type within a component.
 *
 * @param  {React.Component} component
 * @param  {React.Class} type
 *         The type of the component you're looking for.
 *
 * @param  {Function} cond
 *         An optional [Matchers matcher]().
 *
 * @return {Node[]}
 */
function findAllByType(component, type, cond) {
  return findComponentsByType(component, type, cond).map(function(child) {
    return React.findDOMNode(child);
  });
}

module.exports = findAllByType;