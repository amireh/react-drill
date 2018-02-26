var DOM = require('./DOM');
var DOMSelectors = require('./DOMSelectors');
var invariant = require('invariant');
var AssertionError = require('assertion-error');

/**
 * @preserveOrder
 *
 * A scope is an object that represents **one** React component and a set of DOM
 * nodes that you're interacting with. When you [[drill]] into a tree, you get a
 * scope back.
 *
 * The scope APIs are chainable in that most of them return another scope back
 * for you, unless they're actions then they return the same scope back.
 *
 *     drill(component)    // => Scope.<component.type, nodes: [findDOMNode(component)]>
 *       .find(Menu)       // => Scope.<Menu, nodes: [findDOMNode(Menu)]>
 *         .find('button') // => Scope.<Menu, nodes: [HTMLElement.<button>]>
 *           .click()      // => Scope.<Menu, nodes: [HTMLElement.<button>]>
 *           .blur()       // => Scope.<Menu, nodes: [HTMLElement.<button>]>
 *
 *
 * > **WARNING**
 * >
 * > In order for React types to be properly identified, we assume they have a
 * > `displayName` attribute, which is most likely present if you're using any
 * > JSX pre-processor like babeljs but **NOT IF YOU'RE USING ANONYMOUS
 * > FUNCTIONS**.
 *
 * @param {React.Component} component
 *        A **rendered instance** of a React.Class type.
 *
 * @param {Array.<Node>} [nodes=null]
 *        The DOM nodes this scope represents.
 *        Defaults to the component's root DOM node.
 *
 * @param {String} [path=null]
 *        The path of this scope.
 *        Defaults to the `displayName` of the component's type.
 *
 * @param {Scope} [parentScope=null]
 *        The parent scope in which this scope resides.
 *        Null if this is the global scope.
 *
 */
function Scope(component, nodes, path, parentScope) {
  if (!(this instanceof Scope)) {
    return new Scope(component, nodes, path);
  }

  invariant(!!component, "You must drill into a component!");

  /**
   * @property {React.Component}
   *
   * A cursor to the React component instance this scope represents.
   * Component selectors will be operating based on this instance.
   */
  this.component = component;

  /**
   * @property {Array<Node>}
   *
   * The DOM nodes this scope contains. All DOM helpers will be operating
   * against these nodes.
   */
  this.nodes = nodes || [ DOM.findDOMNode(component) ];

  /**
   * @property {String}
   *
   * We use the path for displaying helpful assertion errors.
   *
   * The path could look like:
   *
   *     Root > Button > .icon
   *     Root > .icon[] > .icon-close
   */
  this.path = path || component.constructor.displayName;

  /**
   * @property {Scope}
   *
   * The parent scope for this scope, if any. We utilize this for things like
   * `#end()` where we need to traverse the scope ancestry.
   */
  this.parentScope = parentScope;
}

/** @lends Scope.prototype */
var Spt = Scope.prototype;

Object.defineProperty(Spt, 'node', {
  /**
   * @memberOf Scope.prototype
   *
   * @property {Node} node
   *
   * The first node of this scope. Most of the time, we only have one node to
   * operate on (like a React component's root node) and so this is a convenient
   * accessor.
   *
   * @example
   *
   *     assert(drill(myComponent).node.textContent === 'foobar');
   *
   * @example
   *
   *     assert(drill(myComponent).find('input').node.disabled === true);
   */
  get: function() {
    return this.nodes[0];
  }
});

/**
 * Add a new [[action | DOMHelpers]] that will be available on the scope API.
 * Refer to [[this example | examples/custom-actions.md]] for implementing a
 * custom action.
 *
 * @example
 *
 *     function click(node) {
 *       // do something to trigger a click on this node
 *       console.log(node.tagName + ' was clicked.');
 *     }
 *
 *     Scope.registerHTMLElementMethod('click', click);
 *
 *     Scope(component)
 *       .find('button')
 *         .click()
 *     // => "BUTTON was clicked."
 *
 * @param  {String} name
 *         The name of the method that we should expose on the Scope API for
 *         the action.
 *
 * @param  {Function} action
 *         The actual action implementation.
 */
Scope.registerHTMLElementMethod = function(name, action) {
  Spt[name] = function runAgainstMyNodes() {
    var args = [].slice.call(arguments);

    this.nodes.forEach(function(node) {
      action.apply(null, [node].concat(args));
    });

    return this;
  };
};

/**
 * Find a single component or DOM node within this scope.
 *
 * _This is a convenience accessor which delegates to either [#findByType]() or
 * [#findBySelector]() based on the selector you pass._
 *
 * @param  {String|React.Class} selector
 * @param  {Matcher?} [cond]
 *
 * @return {Scope}
 *
 *         A scope for either the component plus its own DOM node, if that's
 *         what you asked for, or the same component plus the DOM node you asked
 *         for.
 */
Spt.find = function(selector, cond) {
  if (isReactType(selector)) {
    return this.findComponentByType(selector, cond);
  }
  else {
    return this.findBySelector(selector, cond);
  }
};

/**
 * Find a group of components or DOM nodes within this scope.
 * _This is a convenience accessor which delegates to either [#findAllByType]()
 * or [#findBySelector]() based on the selector you pass._
 *
 * @param  {String|React.Class} selector
 *         Either a querySelector or a React.Class.
 *
 * @param  {Matcher?} [cond]
 *         Predicate to locate the exact target.
 *
 * @return {Scope}
 *
 *         A scope for the **same current component** plus the DOM nodes of the
 *         found components or nodes.
 *
 */
Spt.findAll = function(selector, cond) {
  if (isReactType(selector)) {
    return this.findAllByType(selector, cond);
  }
  else {
    return this.findBySelector(selector, cond, true);
  }
};

/**
 * Find a component instance in this scope.
 *
 * @param  {React.Class} type
 *         The type of the component you're looking for.
 *
 * @param  {Matcher?} [cond]
 *         Predicate to locate the exact component.
 *
 * @throws {AssertionError}
 *         If the instance could not be found.
 *
 * @return {Scope}
 *         A new scope with the resolved instance as its root.
 */
Spt.findComponentByType = function(type, cond) {
  var instance = DOMSelectors.findComponentByType(this.component, type, cond);

  this.assert(!!instance,
    "Expected a rendered instance of the type '" + type.displayName + "' " +
    "to be found under '" + this.path + "'"
  );

  return chain(this, { component: instance, path: type.displayName });
};

/**
 * Find the DOM node of a certain React component.
 *
 * @param  {React.Class} type
 * @param  {Function} cond
 *
 * @throws {AssertionError}
 *         If the instance could not be found.
 *
 * @return {Scope}
 *         A scope representing the current component and the DOM node of the
 *         target component instance.
 */
Spt.findByType = function(type, cond) {
  var node = DOMSelectors.findByType(this.component, type, cond);

  this.assert(!!node,
    "Expected a rendered instance of the type '" + type.displayName + "' " +
    "to be found under '" + this.path + "'"
  );

  return chain(this, { nodes: [ node ], path: type.displayName });
};

/**
 * Find all DOM nodes for components of a certain type in this scope.
 *
 * @param  {React.Class} type
 *
 * @param  {Matcher?} [cond]
 *         A predicate for filtering the instances.
 *
 * @throws {AssertionError}
 *         If no instances were found.
 *
 * @return {Scope}
 *         A new scope that represents the current component and the DOM nodes
 *         of the found components.
 */
Spt.findAllByType = function(type, cond) {
  var nodes = DOMSelectors.findAllByType(this.component, type, cond);

  this.assert(nodes.length > 0,
    "Expected one or more rendered instances of the type '" +
    type.displayName + "' to be found under '" + this.path + "'"
  );

  return chain(this, { nodes: nodes, path: type.displayName + '[]' });
};

/**
 * Find one or more DOM nodes by a query selector.
 *
 * @param  {String} selector
 *         A query compatible with querySelectAll().
 *
 * @param  {Function} cond
 *         A predicate to filter the nodes, if the selector is not enough.
 *
 * @param  {Boolean} [expectingMany=false]
 *         Used for display purposes. If you are expecting many nodes, the
 *         path (which is the selector )will be suffixed by a '[]' denoting as
 *         much.
 *
 * @throws {AssertionError}
 *         If no nodes were found.
 *
 * @return {Scope}
 *         A new scope representing the current component and the new
 *         DOM nodes.
 */
Spt.findBySelector = function(selector, cond, expectingMany) {
  var nodes = DOMSelectors.findAll(selector, { container: this.node });

  if (cond) {
    nodes = nodes.filter(cond);
  }

  this.assert(nodes.length > 0,
    "Expected a DOM node to be found using the selector '" + selector + "' " +
    "under '" + this.path + "'"
  );

  return chain(this, {
    nodes: nodes,
    path: expectingMany ?
      selector + '[]' :
      selector
  });
};

/**
 * Find out whether the current scope contains a certain element.
 *
 * Under the hood, this delegates to [#find]() for locating the target. However,
 * [#find]() will throw by default if the target could not be located while this
 * API will not.
 *
 * @param  {Selector|React.Class} selector
 * @param  {Matcher?} [cond]
 *
 * @return {Boolean}
 */
Spt.has = function(selector, cond) {
  try {
    clone(this).find(selector, cond);
    return true;
  }
  catch(e) {
    if (e instanceof AssertionError) {
      return false;
    }
    else {
      throw e;
    }
  }
};

/**
 * Go back to the previous scope, unless this is already the root scope.
 *
 *     Scope(component)
 *       .find(Button, n => n.textContent === 'Remove')
 *         .click()
 *         .end()
 *       .find(Button, n => n.textContent === 'Confirm Removal')
 *         .click()
 *
 * This is similar to the `.end()` routine in jQuery and d3 if you're familiar
 * with them.
 *
 * @return {Scope}
 */
Spt.end = function() {
  return this.parentScope || this;
};

/**
 * Clone this scope with the component's DOM node re-evaluated. Use this API
 * when you know the component's DOM node has changed and the scope's pointer
 * has become stale.
 *
 * @return {Scope}
 *         A new scope instance pointing to the DOM node of the scope's
 *         component.
 */
Spt.reload = function() {
  return new this.constructor(this.component, null, this.path, this.parentScope)
};

/**
 * Pretty-print the scope's path.
 *
 *     String(Scope(component));
 *     // => MyComponent
 *
 *     String(Scope(component).find('button'));
 *     // => MyComponent > button
 *
 *     String(Scope(component).findAll(Button));
 *     // => MyComponent > Button[]
 *
 * @return {String}
 */
Spt.toString = function() {
  return this.path;
};

/**
 * @private
 */
Spt.assert = function(cond, message) {
  if (!cond) {
    throw new AssertionError(message);
  }

  return this;
};

module.exports = Scope;

// -----------------------------------------------------------------------------
// INTERNAL
// -----------------------------------------------------------------------------

function isReactType(object) {
  return object instanceof Function && (object.render instanceof Function || object.prototype.render instanceof Function);
}

function buildPath(drill, childPath) {
  return [ drill, childPath ].join(' > ');
}

function clone(scope, attrs) {
  var newScope = new scope.constructor(scope.component, scope.nodes, scope.path, scope);

  if (attrs) {
    Object.keys(attrs).forEach(function(key) {
      newScope[key] = attrs[key];
    });
  }

  return newScope;
}

/**
 * @internal
 *
 * Build a child scope.
 *
 * @param  {Scope} parentScope
 * @param  {Object} params
 *
 * @param  {React.Component} [params.component]
 *         Defaults to the parentScope's component.
 *
 * @param  {Array<Node>} [params.nodes]
 *         Defaults to the parentScope's nodes.
 *
 * @param  {String} [params.path]
 *
 * @return {Scope}
 */
function chain(parentScope, params) {
  return new parentScope.constructor(
    params.component || parentScope.component,
    params.nodes,
    buildPath(parentScope, params.path),
    parentScope
  );
}
