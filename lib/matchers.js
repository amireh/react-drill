/**
 * @module Matchers
 *
 * Helper functions for locating particular DOM nodes.
 */

/**
 * A matcher for the textContent of a Node.
 *
 * @param  {String}  text
 *         The text, or a part of it, you are expecting.
 *
 * @return {Function}
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
 * @return {Function}
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
 * @return {Function}
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
 * @return {Function}
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

exports.at = function(desiredIndex) {
  return function(node, index) {
    return index === desiredIndex
  }
}

exports.hasProp = function(name, value) {
  return function(node, index, props) {
    return props[name] === value
  }
}

exports.hasProps = function(desiredProps) {
  return function(node, index, props) {
    return Object.keys(desiredProps).every(key => props[key] === desiredProps[key])
  }
}
