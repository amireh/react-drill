/**
 * @module DOM
 *
 * **This interface is exposed only for addons to work and is not meant for
 * direct use.**
 *
 * Register your overrides using [[drill.registerDOMInterface]].
 */
module.exports = {
  /**
   * Whether the DOM node matches the provided selector.
   *
   * @param  {HTMLElement}  node
   * @param  {String}  selector
   * @return {Boolean}
   */
  is: function(node, selector) {
    const $ = require('jquery')
    return $(node).is(selector)
  },

  /**
   * Whether the DOM node is an ancestor of the other node.
   *
   * @param  {HTMLElement} node
   * @param  {HTMLElement} childNode
   *
   * @return {Boolean}
   */
  contains: function(node, childNode) {
    return node.contains(childNode)
  },

  /**
   * @param  {HTMLElement}
   * @param  {String}
   * @return {HTMLElement}
   */
  querySelector: function(node, selector) {
    const $ = require('jquery')
    return $(node).find(selector).toArray()[0]
  },

  /**
   * @param  {HTMLElement}
   * @param  {String}
   * @return {Array.<HTMLElement>}
   */
  querySelectorAll: function(node, selector) {
    const $ = require('jquery')
    return $(node).find(selector).toArray()
  },

  /**
   * @param  {Any}
   * @return {Boolean}
   */
  isDOMNodeSelection: function(selection) {
    const $ = require('jquery')

    return selection instanceof $;
  },

  /**
   * @param  {Any} selection
   * @return {HTMLElement}
   */
  getDOMNodeFromSelection: function(selection) {
    return selection[0]
  },

  /**
   * @param {HTMLElement}
   * @param {String} name
   * @param {String} value
   */
  setAttribute: function(node, name, value) {
    const $ = require('jquery')

    $(node).prop(name, value)
  }
}