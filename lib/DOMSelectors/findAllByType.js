var React = require('react');
var findComponentsByType = require('./findComponentsByType');

function findAllByType(subject, type, cond) {
  return findComponentsByType(subject, type, cond).map(function(child) {
    return React.findDOMNode(child);
  });
}

module.exports = findAllByType;