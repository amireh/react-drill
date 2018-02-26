var invariant = require('invariant');
var AssertionError = require('assertion-error');
var DOM = require('./DOM');
var Selectors = require('./Selectors');
var isReactType = require('./isReactType');
var alwaysTrue = function() { return true }
var arrayOf = function(x) {
  return Array.isArray(x) ? x : [].concat(x || [])
}
var DEFAULT_NAME = '<<unknown>>'

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
function Scope(_components, _nodes, _path, parentScope) {
  if (!(this instanceof Scope)) {
    return new Scope(_components, _nodes, _path, parentScope);
  }

  var components = arrayOf(_components).filter(truthy)

  invariant(components.length > 0, "You must drill into a component!");

  var nodes = arrayOf(_nodes || components.map(x => DOM.findDOMNode(x)))
  var path = _path || components.slice(0, 1).map(getDisplayName)[0]

  /**
   * @property {React.Component}
   *
   * A cursor to the React component instance this scope represents.
   * Component selectors will be operating based on this instance.
   */
  this.components = components;

  /**
   * @property {Array.<HTMLElement>}
   *
   * The DOM nodes this scope contains. All DOM helpers will be operating
   * against these nodes.
   */
  this.nodes = nodes;

  /**
   * @property {String}
   *
   * The path is used for displaying helpful assertion errors. It could look
   * like this:
   *
   *     Root > Button > .icon
   *     Root > .icon[] > .icon-close
   */
  this.path = path;

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
   *     assert(drill(component).node.textContent === 'foobar')
   *
   *     assert.ok(
   *       drill(component)
   *         .find('input')
   *           .node.disabled
   *     )
   */
  get: function() {
    return this.nodes[0];
  }
});

Object.defineProperty(Spt, 'component', {
  /**
   * @memberOf Scope.prototype
   *
   * @property {React.Component} component
   *
   * A cursor to the the first component in this scope. Most of the time, we
   * only have one for a scope so this is a useful shortcut.
   *
   *     assert.ok(
   *       drill(component)
   *         .find(Button)
   *           .component.props.disabled
   *     )
   *
   * It's worth mentioning that it's usually bad practice to reach out to
   * components in test with the exception, perhaps, of inspecting their props.
   */
  get: function() {
    return this.components[0];
  }
});

/**
 * Find a single component or DOM node within this scope.
 *
 * @param  {String|React.Class} selector
 *         A query compatible with querySelectAll() or a React.Class type.
 *
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
    return this._findComponent(selector, cond);
  }
  else {
    return this._findNode(selector, cond);
  }
};

/**
 * Find one or more components or DOM nodes within this scope.
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
    return this._findAllComponents(selector, cond);
  }
  else {
    return this._findAllNodes(selector, cond);
  }
};

/**
 * @private
 *
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
Spt._findComponent = function(type, cond) {
  var instances = this.components.map(function(component) {
    return Selectors.findComponentByType(component, type, cond);
  }).filter(truthy).slice(0, 1);

  this.assert(instances.length > 0,
    "Expected a rendered instance of the type '" + getDisplayName(type) + "' " +
    "to be found under '" + this.path + "'"
  );

  return chain(this, {
    components: instances,
    path: getDisplayName(type)
  });
};

/**
 * @private
 *
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
Spt._findAllComponents = function(type, cond) {
  var components = Selectors.findComponentsByType(this.component, type, cond);

  this.assert(components.length > 0,
    "Expected one or more rendered instances of the type '" +
    getDisplayName(type) + "' to be found under '" + this.path + "'"
  );

  return chain(this, {
    components: components,
    path: getDisplayName(type) + '[]'
  });
};

/**
 * @private
 *
 * Find one or more DOM nodes by a query selector.
 *
 * @param  {String} selector
 *         A query compatible with document.querySelectorAll().
 *
 * @param  {Function} cond
 *         A predicate to filter the nodes, if the selector is not enough.
 *
 *
 * @throws {AssertionError}
 *         If no nodes were found.
 *
 * @return {Scope}
 *         A new scope representing the current component and the new
 *         DOM nodes.
 */
Spt._findAllNodes = function(selector, cond) {
  var nodes = Selectors.findAll(selector, { container: this.node }).filter(cond || alwaysTrue);

  this.assert(nodes.length > 0,
    "Expected at least one DOM node to be found using the selector '" + selector + "' " +
    "under '" + this.path + "'"
  );

  return chain(this, {
    components: this.components,
    nodes: nodes,
    path: selector + '[]'
  });
};

/**
 * @private
 *
 * Find a DOM node within this scope using a selector.
 *
 * @param  {String} selector
 *         A query compatible with document.querySelectorAll().
 *
 * @param  {Function} cond
 *         A predicate to filter the nodes, if the selector is not enough.
 *
 * @throws {AssertionError}
 *         If no nodes were found.
 *
 * @return {Scope}
 *         A new scope representing the current component and the new
 *         DOM nodes.
 */
Spt._findNode = function(selector, cond) {
  var nodes = Selectors.findAll(selector, { container: this.node }).filter(cond || alwaysTrue);

  this.assert(nodes.length > 0,
    "Expected a DOM node to be found using the selector '" + selector + "' " +
    "under '" + this.path + "'"
  );

  return chain(this, {
    components: this.components,
    nodes: nodes.slice(0, 1),
    path: selector
  });
};

/**
 * "Warp" the scope to another component that may be outside of the current DOM
 * tree and is accessible only through a property on the scope's _current_
 * component.
 *
 *     drill(component)
 *       .find(ReactModal)
 *         .warp(modal => modal.portal)
 *           .find(Button)
 *
 * Warping is shown in practice in [[this example | examples/teleporting.md]].
 *
 * @param  {function(React.Component): React.Component} componentLocator
 * @param  {String} name
 * @return {Scope}
 */
Scope.prototype.warp = function(componentLocator, name) {
  var targetComponents = this.components.map(function(component) {
    return componentLocator(component)
  }).filter(truthy)

  return chain(this, {
    components: targetComponents,
    path: name || targetComponents.slice(0, 1).map(getDisplayName)[0] || DEFAULT_NAME
  })
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
  return new this.constructor(this.components, null, this.path, this.parentScope)
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

function buildPath(scope, childPath) {
  return [ scope, childPath ].join(' > ');
}

function clone(scope, attrs) {
  var newScope = new scope.constructor(scope.components, scope.nodes, scope.path, scope);

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
    params.components,
    params.nodes,
    buildPath(parentScope, params.path),
    parentScope
  );
}

function getDisplayName(component) {
  if (!component) {
    return DEFAULT_NAME;
  }

  var displayName = (
    component.displayName ||
    // class components
    (component.constructor && component.constructor.displayName) ||
    // React.createClass components
    (component.type && component.type.name) ||
    (component.type && component.type.displayName) ||

    // ES6 classes
    (
      component.constructor &&
      component.constructor !== Function &&
      component.constructor.name
    ) ||

    // stateless components / functions
    component.name
  )

  if (displayName) {
    return displayName
  }

  return DEFAULT_NAME;
}

function truthy(x) {
  return !!x
}