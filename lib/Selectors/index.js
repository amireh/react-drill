/**
 * @module Selectors
 *
 * Functions for locating DOM nodes and component instances.
 *
 * > **WARNING**
 * >
 * > In order for React types to be properly identified, we assume they have a
 * > `displayName` attribute, which is most likely present if you're using any
 * > JSX pre-processor like babeljs but **NOT IF YOU'RE USING ANONYMOUS
 * > FUNCTIONS**.
 */

/**
 * @property {HTMLElement} rootNode
 *           The DOM node on which all the selectors will perform their queries.
 *
 * @private
 */
var rootNode = require('./rootNode');

/**
 * @param {HTMLElement} node
 *        The DOM node of mounted instance of the component being tested. All
 *        exports will be operating on this node and its children.
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
