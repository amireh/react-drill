var ReactDOM = require('react-dom');
var ReactTestUtils = require('./dependencies/ReactTestUtils');
var DOM = require('./DOM');
var scryRenderedComponentsWithType = ReactTestUtils.scryRenderedComponentsWithType;
var rootNode = null;

/**
 * @module Selectors
 *
 * Functions for locating DOM nodes and component instances.
 */

/**
 * @memberOf Selectors
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
  var selectorType = selector && selector.constructor && selector.constructor.name;

  options = options || {};

  if (typeof selector === "string") {
    node = findAll(selector, options)[0];
  }
  else if (
    selector instanceof HTMLElement ||
    selector instanceof SVGElement ||
    selectorType && selectorType.match(/^(HTML|SVG)\w+/)
  ) {
    node = selector;
  }
  else if (DOM.isDOMNodeSelection(selector)) {
    node = DOM.getDOMNodeFromSelection(selector);
  }

  if (options.assert) {
    assertNodeIsValid(node, selector, options.action);
  }

  return node;
}

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
  var container = options && options.container || rootNode;
  var selection = DOM.querySelectorAll(container, selector)

  if (selection.length === 0 && DOM.is(container, selector)) {
    selection = [ container ];
  }

  return selection;
}

/**
 * @memberOf Selectors
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
 * @return {HTMLElement[]}
 */
function findAllByType(component, type, cond) {
  return findComponentsByType(component, type, cond).map(function(child) {
    return ReactDOM.findDOMNode(child);
  });
}

/**
 * @memberOf Selectors
 *
 * Low-level helper for finding a rendered component instance of a certain type,
 * optionally matching some condition on its DOM node.
 *
 * @param  {React.Component} subject
 *         The component instance that is expected to contain the target.
 *
 * @param  {React.Class} type
 *         The type of the target.
 *
 * @param  {Function} [cond]
 *         An optional [Matchers matcher]() function.
 *
 * @return {React.Component}
 *         The rendered instance, if found.
 *
 * @example
 *
 * Asserting on an `<Icon />` rendered by a `<ComboBoxItem />`
 *
 *     const Subject = require('../SomeComponentThatRendersComboBoxItems');
 *     const ComboBoxItem = require('components/ComboBoxItem');
 *     const Icon = require('components/Icon');
 *
 *     it('should render a "banana" icon', function() {
 *       const subject = React.render(Subject, document.body);
 *
 *       // We locate the instance we want first
 *       const comboBoxItem = findComponentByType(
 *         subject, ComboBoxItem, ':contains("Option A")'
 *       );
 *
 *       // Then we can find things inside of it:
 *       const iconInsideComboBox = findByType(comboBoxItem, Icon);
 *
 *       // Now, we're assured our assertions are running on the <Icon /> we
 *       // want; no need to use :nth-of-type(), '.combo-box--item .icon', or
 *       // whatever.
 *       assert.equal(iconInsideComboBox.className, 'some-icon');
 *     });
 *
 */
function findComponentByType(subject, type, cond, parentNodes) {
  return findComponentsByType(subject, type, cond, parentNodes)[0];
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

// -----------------------------------------------------------------------------
// PUBLIC EXPORTS
// -----------------------------------------------------------------------------

exports.find = find;
exports.findAll = findAll;
exports.findAllByType = findAllByType;
exports.findComponentByType = findComponentByType;
exports.findComponentsByType = findComponentsByType;

/**
 * @deprecated
 *
 * This interface is part of the legacy API and will be removed in the future.
 * You should instead use [[scopes | Scope]] for selecting nodes.
 *
 * @param {HTMLElement} node
 *        The DOM node of mounted instance of the component being tested. All
 *        exports will be operating on this node and its children.
 */
exports.setRootNode = function(node) {
  rootNode = node;
};

// -----------------------------------------------------------------------------
// UTILS
// -----------------------------------------------------------------------------

function assertNodeIsValid(node, selector, action) {
  if (!node) {
    throw new Error(
      "You are attempting to perform (" + action + ") on a node that does " +
      "not exist!\n" +
      "Selector: " + selector
    );
  }

  return node;
}

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

function isDOMDescendantOf(parentNodes, node) {
  return parentNodes.some(function(parentNode) {
    return DOM.contains(parentNode, node);
  });
}
