var rootNode = require('./rootNode');

/**
 * @module DOMSelectors
 *
 * Helpers for locating DOM nodes and component instances.
 */

/**
 * @param {HTMLElement} node
 *        The DOM node of mounted instance of the component being tested. All
 *        exports will be operating on that node and its children.
 */
exports.setRootNode = function(node) {
  rootNode.set(node);
};

exports.find = require('./find');
exports.findAll = require('./findAll');
exports.findByType = require('./findByType');
exports.findAllByType = require('./findAllByType');
exports.findComponentByType = require('./findComponentByType');
exports.findComponentsByType = require('./findComponentsByType');
