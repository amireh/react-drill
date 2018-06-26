var Actions = require('./Actions');
var deprecate = require('./utils').deprecate;
var DOM = require('./DOM');
var Matchers = require('./Matchers');
var Scope = require('./Scope');
var Selectors = require('./Selectors');

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
  get: deprecate('drill.DOMHelpers has been renamed to drill.Actions', function() {
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
  get: deprecate('drill.DOMSelectors has been renamed to drill.Selectors', function() {
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
 * An esoteric API for drilling into an HTML node without a corresponding React
 * component. Useful if you just want to use the [[Selectors]] and [[Actions]]
 * on plain HTML nodes or custom ones like Cheerio.
 *
 *     import { drillIntoNode } from 'react-drill'
 *     import $ from 'cheerio'
 *
 *     drillIntoNode($('div'))
 *       .click()
 *
 * If you're using [Cheerio](https://cheerio.js.org) be sure to use the [[addon |
 * ../addons/cheerio/README.md]] too.
 *
 * @param  {HTMLElement|Any} domNode
 * @return {Scope}
 */
drill.drillIntoNode = function(domNode) {
  return drill({}, [ domNode ]);
};

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
 * @type {Function}
 *
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
drill.registerExtension = createOverrideEndpoint({
  on: Scope.prototype,
  by: identity
});

/**
 * @type {Function}
 *
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
drill.registerAction = createOverrideEndpoint({
  on: Scope.prototype,
  by: function(fn) {
    return function runAgainstMyNodes() {
      var args = [].slice.call(arguments);

      this.nodes.forEach(function(node) {
        fn.apply(null, [node].concat(args));
      });

      return this;
    }
  }
});

/**
 * @type {Function}
 *
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
drill.registerMatcher = createOverrideEndpoint({
  on: Matchers,
  by: identity
})

/**
 * @type {Function}
 *
 * Override an existing [[selector | Selectors]] to use a different driver than
 * jQuery (e.g. cheerio).
 *
 * @param  {String} name
 *         The name of the selector (like `findAll`).
 *
 * @param  {Function} fn
 *         The selector function.
 */
drill.registerSelector = createOverrideEndpoint({
  on: Selectors,
  by: identity
})

/**
 * @type {Function}
 *
 * **Advanced** for use by addons to override the default DOM operations which
 * are normally handled by jQuery. See [[./DOM.js]].
 *
 * @param  {String}   name
 * @param  {Function} fn
 */
drill.registerDOMInterface = createOverrideEndpoint({
  on: DOM,
  by: identity
})

Scope.registerHTMLElementMethod = deprecate(
  'Scope.registerHTMLElementMethod has been renamed to drill.registerAction',
  drill.registerAction
);

// register all the Actions instance methods by default
Object.keys(Actions).forEach(function(method) {
  drill.registerAction(method, Actions[method]);
});

module.exports = drill;

function createOverrideEndpoint(params) {
  var object = params.on;
  var overrideFn = params.by;

  return function(name, next) {
    var prev = object[name];

    object[name] = overrideFn(next);

    return function restore() {
      object[name] = prev;
    };
  }
}

function identity(x) {
  return x;
}