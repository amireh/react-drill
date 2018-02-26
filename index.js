var Scope = require('./lib/Scope');
var DOMHelpers = require('./lib/DOMHelpers');

// register all the DOMHelpers instance methods by default
Object.keys(DOMHelpers).forEach(function(method) {
  Scope.registerHTMLElementMethod(method, DOMHelpers[method]);
});

/**
 * Drill into a rendered component and start kicking. This is the main export of
 * the library.
 *
 * @param  {React.Component} component
 * @return {Scope}
 *
 * @example
 *
 *     import { drill } from 'react-drill'
 *     import Menu from './Menu'
 *
 *     const component = ReactDOM.render(Menu, document.createElement('div'))
 *
 *     drill(component)
 *       .find('button', m.hasText('Logout'))
 *         .click()
 */
function drill(component, nodes) {
  return new Scope(component, nodes);
}

/**
 * @property {DOMHelpers} DOMHelpers
 *
 * A stand-alone version of the DOM helpers to be used without the drilling API.
 */
drill.DOMHelpers = DOMHelpers;

/**
 * @property {DOMSelectors}
 *
 * A stand-alone version of the DOM selectors to be used without the drilling
 * API.
 */
drill.DOMSelectors = require('./lib/DOMSelectors');

/**
 * @property {drill}
 *
 * A convenience shortcut to the drill function when you are using ES6
 * destructuring.
 *
 * For example:
 *
 *     const { drill } = require('react-drill');
 */
drill.drill = drill;

/**
 * @property {Matchers}
 *
 * A shortcut property to access the pre-made [Matchers matcher]() functions.
 *
 * For example:
 *
 *     const { m } = require('react-drill');
 *
 *     console.log(typeof m.hasText); // => "function"
 */
drill.m = require('./lib/matchers');
drill.Scope = Scope;

module.exports = drill;
