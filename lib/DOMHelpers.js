var $ = require("jquery");
var ReactTestUtils = require("react-addons-test-utils");
var Simulate = ReactTestUtils.Simulate;
var SimulateNative = ReactTestUtils.SimulateNative;
var DOMSelectors = require('./DOMSelectors');

var find = DOMSelectors.find;

/**
 * @module DOMHelpers
 *
 * Helpers for simulating events on DOM nodes and React components.
 *
 * When these helpers are called directly, they will operate on the
 * [DOMSelectors.rootNode](). However, they are also available on the [Scope]()
 * objects you receive when drilling.
 *
 * @example Invoking a helper directly based on rootNode
 *
 *     const drill = require('react-drill');
 *
 *     drill.DOMSelectors.setRootNode(document.body);
 *     drill.DOMHelpers.find('.something');
 *
 *     // => document.body.querySelector('.something');
 *
 * @example Invoking through the Scope API
 *
 *     const drill = require('react-drill');
 *
 *     drill(myComponent).find('.something');
 *
 *     // => ReactDOM.findDOMNode(myComponent).querySelector('.something');
 */

/**
 * Simulate a mouse-click on any HTMLElement.
 *
 * @param {String|HTMLElement} selector
 * @param {Boolean} [simulateNative=false]
 * @param {Object} options
 *        See [DOMSelectors.find]() for the options.
 *
 * @return {Event}
 */
exports.click = function(selector, simulateNative, options) {
  var node = find(selector, { assert: true, action: "click" });

  if (simulateNative === true) {
    SimulateNative.click(node, options);
  }
  else {
    Simulate.click(node, options);
  }
};

/**
 * Simulate a change on any HTMLElement.
 *
 * @param {String|HTMLElement} selector
 * @param {Object} attrs
 *        The "change" event attributes.
 */
exports.change = function(selector, attrs) {
  var node = find(selector, { assert: true, action: "change" });

  Simulate.change(node, attrs);
};

/**
 * Simulate focus on any HTMLElement.
 *
 * @param {String|HTMLElement} selector
 *
 * @return {Event}
 */
exports.focus = function(selector) {
  Simulate.focus(find(selector, { assert: true, action: "focus" }));
};

/**
 * Simulate blur on any HTMLElement.
 *
 * @param {String|HTMLElement} selector
 *
 * @return {Event}
 */
exports.blur = function(selector) {
  Simulate.blur(find(selector, { assert: true, action: "blur" }));
};

exports.check = function(selector, isChecked) {
  var node = find(selector, { assert: true, action: "check" });

  if (arguments.length === 1) {
    isChecked = !node.checked;
  }

  $(node).prop("checked", isChecked);

  Simulate.change(node);
};

/**
 * Fill in an <input /> with some text.
 *
 * @param {String|HTMLElement} selector
 * @param {String} text
 *        The text to fill in the <input /> with.
 */
exports.fillIn = function(selector, text) {
  var node = find(selector, { assert: true, action: "fillIn" });
  node.value = text;
  Simulate.input(node);
  Simulate.change(node);
};

exports.paste = function(selector, text) {
  exports.fillIn(selector, text);
  Simulate.paste(selector);
};

/**
 * Select an option inside a <select /> tag.
 *
 * This helper is compatible with Chosen tags.
 *
 * @param {String|HTMLElement} selector
 * @param {String} value
 *        The value of the <option /> you want to select.
 */
exports.select = function(selector, value) {
  var node = find(selector, { assert: true, action: "select" });
  var $node = $(node);

  $node.find(":selected").prop("selected", false);
  $node.find("[value='" + value + "']").prop("selected", true);

  node.value = value;
  Simulate.change(node);
};

/**
 * Submit a form elment.
 *
 * @param {String|HTMLElement} selector
 */
exports.submit = function(selector) {
  Simulate.submit(find(selector, { assert: true }));
};

/**
 * Simulate single key-down event.
 *
 * @param {String|HTMLElement} selector
 * @param {Number} keyCode
 * @param {Object} options
 */
exports.keyDown = function(selector, keyCode, options) {
  var node = find(selector, { assert: true, action: "keyDown" });
  node.focus();
  Simulate.keyDown(node, createKeyboardEventOptions(keyCode, options));
};

/**
 * Simulate single key-up event.
 *
 * @param {String|HTMLElement} selector
 * @param {Number} keyCode
 * @param {Object} options
 */
exports.keyUp = function(selector, keyCode, options) {
  var node = find(selector, { assert: true, action: "keyUp" });
  node.focus();
  Simulate.keyUp(node, createKeyboardEventOptions(keyCode, options));
};

/**
 * Simulate single key-up event.
 *
 * @param {String|HTMLElement} selector
 * @param {Number} keyCode
 * @param {Object} options
 */
exports.keyPress = function(selector, keyCode, options) {
  var node = find(selector, { assert: true, action: "keyPress" });
  node.focus();
  Simulate.keyPress(node, createKeyboardEventOptions(keyCode, options));
};

/**
 * Simulate key-presses to fill in an <input /> with some text.
 *
 * @param {String|HTMLElement} selector
 *
 * @param {String} text
 *
 * @param {Boolean} [dontReplace=false]
 *        Set to true if you don't want the input's value to be cleared before
 *        modifying it (e.g, append instead of replace.)
 */
exports.typeIn = function(selector, text, dontReplace) {
  var node = find(selector, { assert: true, action: "typeIn" });

  node.focus();

  if (!dontReplace) {
    node.value = "";
  }

  for (var i = 0; i < text.length; ++i) {
    var char  = text.charAt(i);
    var code  = text.charCodeAt(i);
    var down  = createEvt(node, "keydown",  char, code);
    var press = createEvt(node, "keypress", char, code);
    var up    = createEvt(node, "keyup",    char, code);

    $(node).trigger(down);
    $(node).trigger(press);

    node.value += char;

    $(node).trigger(up);
    Simulate.input(node);
    Simulate.change(node);
  }
};

/**
 * Simulate a mouseEnter on any HTMLElement.
 * Assumes you are leaving the body; use mouseTransition if you need to
 * control both targets
 *
 * @param {String|HTMLElement} selector
 */
exports.mouseEnter = function(selector) {
  exports.mouseTransition(document.body, selector);
};

/**
 * Simulate a mouseLeave on any HTMLElement.
 * Assumes you are entering the body; use mouseTransition if you need to
 * control both targets
 *
 * @param {String|HTMLElement} selector
 */
exports.mouseLeave = function(selector) {
  exports.mouseTransition(selector, document.body);
};

/**
 * Simulate a mouse-down on any HTMLElement.
 *
 * @param {String|HTMLElement} selector
 */
exports.mouseDown = function(selector) {
  var node = find(selector, { assert: true, action: "mouseDown" });

  Simulate.mouseDown(node);
};

/**
 * Simulate a mouse-up on any HTMLElement.
 *
 * @param {String|HTMLElement} selector
 */
exports.mouseUp = function(selector) {
  var node = find(selector, { assert: true, action: "mouseUp" });

  Simulate.mouseUp(node);
};

/**
 * Simulate a mouseEnter + mouseLeave events for two nodes
 *
 * Both the native mouseOut and mouseOver events need to be simulated in
 * order for the mouseEnter or mouseLeave to fire.
 * https://github.com/facebook/react/issues/1297
 *
 * @param {String|HTMLElement} fromSelector
 * @param {String|HTMLElement} toSelector
 */
exports.mouseTransition = function(fromSelector, toSelector) {
  var fromNode = find(fromSelector, { assert: true, action: "mouseLeave" });
  var toNode = find(toSelector, { assert: true, action: "mouseEnter" });

  SimulateNative.mouseOut(fromNode, {
    relatedTarget: toNode
  });

  SimulateNative.mouseOver(toNode, {
    relatedTarget: fromNode
  });
};

/**
 * Dispatch a Native event to trigger events added via addEventListener
 *
 * @param {String|HTMLElement} selector
 * @param {String} type
 * @param {Object} attrs
 *        The 'input' event attributes.
 */
exports.dispatchNativeEvent = function(selector, type, attrs) {
  const node = find(selector, { assert: true, action: type })
  const event = new Event(type)
  node.dispatchEvent(event, attrs)
};

function createEvt(node, type, char, code) {
  var evt = $.Event(type);

  evt.altGraphKey = false;
  evt.altKey = false;
  evt.bubbles = true;
  evt.cancelBubble = false;
  evt.cancelable = true;
  evt.charCode = code;
  evt.clipboardData = undefined;
  evt.ctrlKey = false;
  evt.currentTarget = node;
  evt.defaultPrevented = false;
  evt.detail = 0;
  evt.eventPhase = 2;
  evt.keyCode = code;
  evt.keyIdentifier = char.toUpperCase();
  evt.keyLocation = 0;
  evt.layerX = 0;
  evt.layerY = 0;
  evt.metaKey = false;
  evt.pageX = 0;
  evt.pageY = 0;
  evt.returnValue = true;
  evt.shiftKey = false;
  evt.srcElement = node;
  evt.target = node;
  evt.type = type;
  evt.view = window;
  evt.which = code;

  return evt;
}

function createKeyboardEventOptions(keyCode, _options) {
  var options = _options || {};

  return {
    keyCode: keyCode,
    key: keyCode,
    which: keyCode,
    ctrlKey: options.ctrlKey === true,
    altKey: options.altKey === true,
    metaKey: options.metaKey === true,
    shiftKey: options.shiftKey === true,
    getModifierState: function(state) {
      switch (state) {
        case 'Alt':
          return options.altKey === true;
        case 'Shift':
          return options.shiftKey === true;
        case 'Meta':
          return options.metaKey === true;
        case 'Control':
          return options.ctrlKey === true;
      }
    }
  };
}