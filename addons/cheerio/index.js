const drill = require('react-drill')
const $ = require('cheerio')

const stringOf = x => typeof x === 'string' ? x : x || ''
const restorations = []

/**
 * @module Cheerio.Matchers
 */
const matchers = {
  /**
   * @param {String}
   * @return {Matcher}
   */
  hasText: function(text) {
    return function(node) {
      return $(node).text().indexOf(text) > -1;
    };
  },

  /**
   * @param {String}
   * @return {Matcher}
   */
  hasClass: function(className) {
    return function(node) {
      return $(node).hasClass(className);
    }
  },

  /**
   * @param {String} name
   * @param {String} value
   * @return {Matcher}
   */
  hasAttribute: function(name, value) {
    if (arguments.length === 2) {
      return function(node) {
        return $(node).attr(name) === value;
      }
    }
    else {
      return function(node) {
        return stringOf($(node).attr(name)).length !== 0;
      }
    }
  },
}

const DOM = {
  is: function(node, selector) {
    return $(node).is(selector)
  },

  contains: function(node, childNode) {
    return $.contains(node, childNode)
  },

  querySelector: function(node, selector) {
    return $(node).find(selector).toArray()[0];
  },

  querySelectorAll: function(node, selector) {
    return $(node).find(selector).toArray();
  },

  isDOMNodeSelection: function(selection) {
    return (
      selection &&
      typeof selection === 'object' &&
      !Array.isArray(selection) &&
      selection.type === 'tag'
    );
  },

  getDOMNodeFromSelection: function(selection) {
    return selection;
  },

  setAttribute: function(node, name, value) {
    $(node).attr(name, value);
  }
}

exports.activate = function() {
  restorations.push(drill.registerAction('clickNative', function() {
    throw new Error('clickNative is not available for cheerio!')
  }))

  Object.keys(matchers).forEach(function(name) {
    restorations.push(drill.registerMatcher(name, matchers[name]))
  })

  Object.keys(DOM).forEach(function(name) {
    restorations.push(drill.registerDOMInterface(name, DOM[name]))
  })
}

exports.deactivate = function() {
  restorations.splice(0).forEach(x => x())
}