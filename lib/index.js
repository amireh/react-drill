var Actions = require('./Actions');
var Matchers = require('./Matchers');
var Scope = require('./Scope');
var Selectors = require('./Selectors');
var deprecate = require('./deprecate');

// register all the Actions instance methods by default
Object.keys(Actions).forEach(function(method) {
  Scope.exposeAction(method, Actions[method]);
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
 * @property {Actions} Actions
 *
 * A stand-alone version of the DOM helpers to be used without the drilling API.
 */
drill.Actions = Actions;

Object.defineProperty(drill, 'DOMHelpers', {
  get: deprecate('drill.DOMHelpers has been renamed to Actions', function() {
    return Actions
  })
})

/**
/**
 * @property {Selectors}
 *
 * A stand-alone version of the DOM selectors to be used without the drilling
 * API.
 */
drill.Selectors = Selectors;

Object.defineProperty(drill, 'DOMSelectors', {
  get: deprecate('drill.DOMSelectors has been renamed to Selectors', function() {
    return drill.Selectors
  })
})

/**
 * @property {drill}
 *
 * A convenience shortcut to the drill function when you are using ES6
 * destructuring.
 *
 * For example:
 *
 *     import { drill, m } from 'react-drill'
 */
drill.drill = drill;

/**
 * @property {Matchers}
 *
 * A shortcut property to access the pre-made [Matchers matcher]() functions.
 *
 * For example:
 *
 *     import { m } from 'react-drill'
 *
 *     console.log(typeof m.hasText) // => "function"
 */
drill.m = Matchers;
drill.Matchers = Matchers;
drill.Scope = Scope;

module.exports = drill;
