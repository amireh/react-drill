var $ = require("jquery");
var rootNode = require('./rootNode');

/**
 * @namespace DOMHelpers
 *
 * Locate an element inside the component.
 *
 * @param {String} selector
 *        A document.querySelector or jQuery.find() selector.
 *
 * @param {Object} options
 * @param {HTMLElement} options.container
 *        The container in which to look for the node.
 *
 * @return {HTMLElement}
 */
function findAll(selector, options) {
  options = options || {};

  var $container = $(options.container || rootNode.get());
  var $selection = $container.find(selector);

  if ($selection.length === 0 && $container.is(selector)) {
    $selection = $container;
  }

  return $selection.toArray();
}

module.exports = findAll;