/**
 * @module Matchers
 *
 * Functions for locating particular a DOM node or component from the list of
 * matches found by [[Scope#find]].
 *
 * @typedef {Matchers~Matcher}
 * @type {Function}
 * @alias Matcher
 *
 * @param {HTMLElement} domNode
 * @param {Number} index
 * @param {Object?} props
 *
 * @return {Boolean}
 */

/**
 * A matcher for the textContent of a Node.
 *
 * @param  {String}  text
 *         The text, or a part of it, you are expecting.
 *
 * @return {Matcher}
 *
 * @example Using with the drill API
 *
 *     const { m, drill } = require('react-drill');
 *
 *     drill(myComponent)
 *       .find(Button, m.hasText('Remove User'))
 *         .click()
 *     ;
 */
exports.hasText = function(text) {
  return function(node) {
    return node.textContent.indexOf(text) > -1;
  };
};

/**
 * Create a matcher function that tests a DOM node for containing a certain
 * CSS class.
 *
 * @param  {String}  className
 *         The CSS class you are expecting the Node to contain.
 *
 * @return {Matcher}
 *
 * @example Using with the drill API
 *
 *     const { m, drill } = require('react-drill');
 *
 *     drill(myComponent)
 *       .find(Button, m.hasClass('btn--danger'))
 *         .click()
 *     ;
 */
exports.hasClass = function(className) {
  return function(node) {
    return node.className.match(className);
  }
};

/**
 * Create a matcher function that tests a DOM node for either having a certain
 * attribute at all, or for having that attribute with a specific value.
 *
 * @param  {String} name
 *         The attribute name.
 *
 * @param  {*} [value]
 *         The attribute value. When blank, only the attribute existence will
 *         be checked for.
 *
 * @return {Matcher}
 *
 * @example Using with the drill API
 *
 *     const { m, drill } = require('react-drill');
 *
 *     drill(myComponent)
 *       .find(Button, m.hasAttribute('disabled', false))
 *         .click()
 *     ;
 */
exports.hasAttribute = function(name, value) {
  if (arguments.length === 2) {
    return function(node) {
      return node.getAttribute(name) === value;
    }
  }
  else {
    return function(node) {
      return node.hasAttribute(name);
    }
  }
};

/**
 * Create a matcher function that tests a DOM node for having a certain
 * property with a specific value.
 *
 * @param  {String} property
 *         The property name.
 *
 * @param  {String} value
 *         The value name.
 *
 * @return {Matcher}
 *
 * @example Using with the drill API
 *
 *     const { m, drill } = require('react-drill');
 *
 *     drill(myComponent)
 *       .find('input', m.hasProperty('value', 'foo'))
 *         .click()
 *     ;
 */
exports.hasProperty = function(property, value) {
  return function(node) {
    return node[property] === value;
  }
}

/**
 * Select a component or a DOM node at a specified index from the list of
 * matches.
 *
 *     // find the fourth Button under component
 *     drill(component).find(Button, m.at(3))
 *
 * @param  {Number} desiredIndex
 *
 * @return {Matcher}
 */
exports.at = function(desiredIndex) {
  return function(node, index) {
    return index === desiredIndex
  }
}

/**
 * Select a component that has a prop matching the specified value.
 *
 * @param  {String} propKey
 * @param  {Any}  propValue
 *
 * @return {Matcher}
 */
exports.hasProp = function(propKey, propValue) {
  return function(node, index, props) {
    return props[propKey] === propValue
  }
}
