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
 * > **DEPRECATED**
 * >
 * > Use of these APIs without a Scope is discouraged and support for it will be
 * > dropped in the future.
 *
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
 * @deprecated
 * @property {Selectors}
 *
 * > **DEPRECATED**
 * >
 * > Use of these APIs without a Scope is discouraged and support for it will be
 * > dropped in the future.
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
 * For example, the following all work and are equivalent:
 *
 *     // [1]
 *     import { drill, m } from 'react-drill'
 *     // [2]
 *     import drill, { m } from 'react-drill'
 *     // [3]
 *     const { drill, m } = require('react-drill')
 *     // [4]
 *     const drill = require('react-drill')
 *     const { m } = drill
 *
 */
drill.drill = drill;

/**
 * @property {Matchers}
 *
 * A shortcut property to access the available [[Matchers]].
 */
drill.m = Matchers;

/**
 * @property {Matchers}
 *
 * Alias to [[.m]].
 */
drill.Matchers = Matchers;

/**
 * @property {Scope}
 */
drill.Scope = Scope;

/**
 * Add a new API for Scope. This is useful for extending the scope with
 * functionality other than actions like custom warp routines.
 *
 * The [[teleporting | examples/teleporting.md]] example shows this in practice.
 *
 * @param  {String}   name
 *         The name to use for the API.
 *
 * @param  {function(): Scope} fn
 *         The function MUST return a scope (new or itself.)
 */
drill.registerExtension = function(name, fn) {
  Scope.prototype[name] = fn;
};

/**
 * Add a new [[action | Actions]] that will be available on the scope API. Refer
 * to [[this example | examples/custom-actions.md]] for implementing a custom
 * action.
 *
 * @param  {String} name
 *         The name by which we should expose the action on the Scope API.
 *
 * @param  {Function} action
 *         The actual action implementation.
 */
drill.registerAction = function(name, fn) {
  Scope.prototype[name] = function runAgainstMyNodes() {
    var args = [].slice.call(arguments);

    this.nodes.forEach(function(node) {
      fn.apply(null, [node].concat(args));
    });

    return this;
  };
};

/**
 * Register a new [[matcher | Matchers]] that can be accessed through the `m`
 * exported symbol of the package. Refer to [[this example | examples/custom-
 * matchers.md]] for implementing one.
 *
 * @param  {String}   name
 *         The name to register the matcher to.
 *
 * @param  {Function} fn
 *         The matcher function.
 */
drill.registerMatcher = function(name, fn) {
  Matchers[name] = fn;
};

module.exports = drill;
