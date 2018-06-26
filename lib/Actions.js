var ReactTestUtils = require('./dependencies/ReactTestUtils');
var DOM = require('./DOM')
var Selectors = require('./Selectors');
var canUseDataTransfer = require('./utils').canUseDataTransfer;
var Simulate = ReactTestUtils.Simulate;
var SimulateNative = ReactTestUtils.SimulateNative;
var find = Selectors.find;

/**
 * @module Actions
 *
 * Functions for simulating events on DOM nodes and React components.
 *
 * If you're looking to implement your own custom action, [[this example |
 * examples/custom-actions.md]] shows how to do it.
 *
 * **Note on the operating DOM container:**
 *
 * When these helpers are called directly, they will operate with the [["root
 * node" | Selectors.setRootNode]] as the DOM container. However,
 * the recommended approach is to use them via [[Scope]] objects that you
 * receive through drilling, in which case the container is whatever the scope
 * is representing at the time.
 *
 * @example Invoking through the Scope API
 *
 *     import drill from 'react-drill'
 *
 *     drill(component)
 *       .find('.something')
 *         .click()
 *
 * @example Invoking a helper directly based on rootNode
 *
 *     const drill = require('react-drill');
 *
 *     drill.Selectors.setRootNode(document.body);
 *     drill.Actions.find('.something');
 *
 *     // => document.body.querySelector('.something');
 *
 */

/**
 * Simulate a React mouse-click on any HTMLElement.
 *
 * @param {String|HTMLElement} selector
 * @param {Object} options
 *        Synthetic event options to pass to React.
 */
exports.click = function(selector, simulateNative, options) {
  var node = find(selector, { assert: true, action: "click" });

  Simulate.click(node, options);
};

/**
 * Simulate a native browser mouse-click event on any HTMLElement.
 *
 * @param {String|HTMLElement} selector
 */
exports.clickNative = function(selector) {
  find(selector, { assert: true, action: "clickNative" }).click()
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

/**
 * Check a checkbox.
 *
 * _This action dispatches a native browser event as well as the React change
 * event._
 *
 * @param {String|HTMLElement} selector
 */
exports.check = function(selector) {
  var node = find(selector, { assert: true, action: "check" });

  DOM.setAttribute(node, "checked", true);

  Simulate.change(node);
};

/**
 * Unmark a checkbox as checked.
 *
 * _This action dispatches a native browser event as well as the React change
 * event._
 *
 * @param {String|HTMLElement} selector
 */
exports.uncheck = function(selector) {
  var node = find(selector, { assert: true, action: "check" });

  DOM.setAttribute(node, "checked", false);

  Simulate.change(node);
};

/**
 * Fill a text widget with some text.
 *
 * _This action modifies the DOM node's "value" property and triggers the React
 * "input" and "change" events._
 *
 * @param {String|HTMLElement} selector
 * @param {String} text
 */
exports.fillIn = function(selector, text) {
  const getNode = () => find(selector, { assert: true, action: "fillIn" });

  var node = getNode()
  node.value = text;
  Simulate.input(node);

  // as of React 16, Simulate now re-renders on each event,
  // so we have to get the reference to the node again for a new event.
  node = getNode()
  node.value = text;
  Simulate.change(node);
};

/**
 * Paste some textual content into some text widget triggering the React "paste"
 * event.
 *
 * References:
 *
 * - https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent
 * - https://reactjs.org/docs/events.html#clipboard-events
 *
 * @param  {String|HTMLElement} selector
 */
exports.paste = function(selector, text) {
  if (canUseDataTransfer()) {
    var dataTransfer = new DataTransfer()
    var node = find(selector, { assert: true, action: "fillIn" });

    dataTransfer.setData('text', text)

    Simulate.paste(node, {
      clipboardData: dataTransfer
    });

  }
  else {
    exports.fillIn(selector, text);
    Simulate.paste(selector);
  }
};

/**
 * Select an option inside a <select /> tag.
 *
 * @param {String|HTMLElement} selector
 * @param {String} value
 *        The value of the <option /> you want to select.
 */
exports.select = function(selector, value) {
  var node = find(selector, { assert: true, action: "select" });
  var selectedOption = DOM.querySelector(node, ':selected')
  var desiredOption = DOM.querySelector(node, "[value='" + value + "']")

  DOM.setAttribute(selectedOption, 'selected', false)
  DOM.setAttribute(desiredOption, 'selected', true)

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
 * Simulate single "keyDown" event. Useful to test an isolated[1] `onKeyDown`
 * handler.
 *
 * [1] See the note on [[.keyPress]]
 *
 * @param {String|HTMLElement} selector
 * @param {Number} keyCode
 * @param {Object} options
 */
exports.keyDown = function(selector, keyCode, options) {
  var node = find(selector, { assert: true, action: "keyDown" });
  Simulate.keyDown(node, createKeyboardEventOptions(keyCode, options));
};

/**
 * Simulate single "keyUp" event. Useful to test an isolated[1] `onKeyUp`
 * handler.
 *
 * [1] See the note on [[.keyPress]]
 *
 * @param {String|HTMLElement} selector
 * @param {Number} keyCode
 * @param {Object} options
 */
exports.keyUp = function(selector, keyCode, options) {
  var node = find(selector, { assert: true, action: "keyUp" });
  Simulate.keyUp(node, createKeyboardEventOptions(keyCode, options));
};

/**
 * Simulate single "keyPress" event. Useful to test an isolated[1] `onKeyPress`
 * handler.
 *
 * [1] When a user is performing an action that triggers such an event in the
 * browser, it will be preceded and followed by other events. For this reason,
 * this action is not a reliable simulation for such a scenario. Consider using
 * [[.fillIn]] or [[.typeIn]] instead.
 *
 * @param {String|HTMLElement} selector
 * @param {Number} keyCode
 * @param {Object} options
 */
exports.keyPress = function(selector, keyCode, options) {
  var node = find(selector, { assert: true, action: "keyPress" });
  Simulate.keyPress(node, createKeyboardEventOptions(keyCode, options));
};

/**
 * Simulate key-presses to fill in an <input /> with some text.
 *
 * @param {String|HTMLElement} selector
 * @param {String} text
 */
exports.typeIn = function(selector, text) {
  var node = find(selector, { assert: true, action: "typeIn" });
  var initialValue = node.value;
  var characterCount = text.length;
  // see https://reactjs.org/docs/events.html#overview
  var commonData = {
    bubbles: true,
    cancelable: true,
    defaultPrevented: false,
    eventPhase: 2,
    isTrusted: true,
  }

  for (var i = 0; i < characterCount; ++i) {
    var code = text.charCodeAt(i);
    var keyEventData = Object.assign({
      altKey: false,
      charCode: code,
      ctrlKey: false,
      keyCode: code,
      metaKey: false,
      shiftKey: false,
      which: code,
    }, commonData)

    var inputEventData = Object.assign({
      charCode: code,
      target: {
        value: initialValue + text.slice(0, i + 1)
      }
    }, commonData)

    Simulate.keyDown(node, keyEventData)
    Simulate.keyPress(node, keyEventData)
    Simulate.beforeInput(node, inputEventData)
    Simulate.input(node, inputEventData)
    Simulate.change(node, inputEventData)
    Simulate.keyUp(node, keyEventData)
  }
};

/**
 * Simulate a mouseEnter on any HTMLElement. Assumes you are leaving
 * `document.body`; use [[.mouseTransition]] if you need to control both targets
 *
 * @param {String|HTMLElement} selector
 */
exports.mouseEnter = function(selector) {
  exports.mouseTransition(document.body, selector);
};

/**
 * Simulate a mouseLeave on any HTMLElement. Assumes you are entering
 * `document.body`; use [[.mouseTransition]] if you need to control both
 * targets.
 *
 * @param {String|HTMLElement} selector
 */
exports.mouseLeave = function(selector) {
  exports.mouseTransition(selector, document.body);
};

/**
 * Simulate a mouse-down on any HTMLElement.
 *
 * TODO: accept a button?
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
 * TODO: accept a button?
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
 *
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
 * Dispatch a Native event using [dispatchEvent](https://developer.mozilla.org
 * /en-US/docs/Web/API/EventTarget/dispatchEvent) to trigger events added via
 * `addEventListener`.
 *
 * This is useful if you need to interface with a non-React library.
 *
 * @param {String|HTMLElement} selector
 * @param {String} type
 * @param {Object} attrs
 *        See [Event attributes on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event).
 */
exports.dispatchNativeEvent = function(selector, type, attrs) {
  const node = find(selector, { assert: true, action: type })
  const event = new Event(type)
  node.dispatchEvent(event, attrs)
};

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
    getModifierState: getModifierState(options)
  };
}

function getModifierState(options) {
  /* istanbul ignore next */
  return function(state) {
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
}
