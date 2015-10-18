var $ = require('jquery');
var findAll = require('./findAll');

function assertNodeIsValid(node, selector, container, action) {
  if (!node) {
    throw new Error(
      "You are attempting to perform (" + action + ") on a node that does " +
      "not exist!\n" +
      "Selector: " + selector +
      (container ? '\nContainer: ' + container : '')
    );
  }

  return node;
}

/**
 * @memberOf DOMSelectors
 *
 * Locate an element inside the component.
 *
 * @param {String} selector
 *        A document.querySelector or jQuery.find() selector.
 *
 * @param {Object} options
 *
 * @param {HTMLElement} options.container
 *
 * @param {Boolean} options.assert
 *        If true, the method will throw an error if the node is not valid or
 *        could not be found in the DOM.
 *
 * @return {HTMLElement}
 */
function find(selector, options) {
  var node;

  options = options || {};

  if (typeof selector === "string") {
    node = findAll(selector, options)[0];
  }
  else if (selector instanceof HTMLElement) {
    node = selector;
  }
  else if (selector instanceof SVGSVGElement) {
    node = selector;
  }
  else if (selector instanceof $) {
    node = selector[0];
  }

  if (options.assert) {
    assertNodeIsValid(node, selector, options.container, options.action);
  }

  return node;
}

module.exports = find;