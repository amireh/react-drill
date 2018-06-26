var DOM = require('../DOM')
var rootNode = require('./rootNode');

/**
 * @memberOf Selectors
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
  var container = options && options.container || rootNode.get();
  var selection = DOM.querySelectorAll(container, selector)

  if (selection.length === 0 && DOM.is(container, selector)) {
    selection = [ container ];
  }

  return selection;
}

module.exports = findAll;