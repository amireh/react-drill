var invariant = require('invariant');
var AssertionError = require('assertion-error');
var ReactDOM = require('react-dom');
var Selectors = require('./Selectors');
var isReactType = require('./utils').isReactType;
var getDisplayName = require('./utils').getDisplayName;
var DEFAULT_NAME = require('./utils').DEFAULT_NAME;
var alwaysTrue = function() { return true };
var arrayOf = function(x) {
  return Array.isArray(x) ? x : [].concat(x || [])
};

/**
 * @preserveOrder
 *
 * A scope is an object that represents the React components and DOM nodes you
 * want to interact with. When you [[drill]] into a tree, you get a scope back.
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
 * @param {React.Component|Array.<React.Component>} components
 *        These must be **rendered instances** not actual classes/types.
 *
 * @param {Array.<Node>} [nodes]
 *        The DOM nodes this scope represents otherwise we'll look for the
 *        nodes of the components.
 *
 * @param {String} [path]
 *        The path of this scope.
 *        Defaults to the `displayName` of the component's type.
 *
 * @param {Scope} [parentScope]
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

  var nodes = (
    arrayOf(_nodes || components.map(x => ReactDOM.findDOMNode(x)))
  ).filter(truthy)

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

  /**
   * @property {Object}
   * @private
   */
  this.refs = parentScope ? parentScope.refs : {};
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
 * If you query using a React class, the new scope will represent the component
 * that was found plus its DOM node.
 *
 * If you query using a DOM selector, the new scope will represent the same
 * component plus the DOM node that was found.
 *
 * If the target could not be found, an
 * [AssertionError](https://www.npmjs.com/package/assertion-error) will be
 * thrown.
 *
 * @param  {String|React.Class} selector
 *         A query compatible with querySelectAll() or a React.Class type.
 *
 * @param  {Matcher?} [cond]
 *
 * @return {Scope}
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
 * If you query using a React class, the new scope will represent all the
 * components that were found plus their DOM nodes.
 *
 * If you query using a DOM selector, the new scope will represent the same
 * components plus the DOM nodes that were found.
 *
 * If not a single target could be found, an
 * [AssertionError](https://www.npmjs.com/package/assertion-error) will be
 * thrown.
 *
 * @param  {String|React.Class} selector
 *         Either a querySelector or a React.Class.
 *
 * @param  {Matcher?} [cond]
 *         Predicate to filter the targets by.
 *
 * @return {Scope}
 */
Spt.findAll = function(selector, cond) {
  if (isReactType(selector)) {
    return this._findAllComponents(selector, cond);
  }
  else {
    return this._findAllNodes(selector, cond);
  }
};

Spt._findComponent = function(type, cond) {
  var nodes = this.nodes;
  var instances = this.components
    .map(function(component) {
      return Selectors.findComponentByType(component, type, cond, nodes);
    })
    .filter(truthy)
    .slice(0, 1)
  ;

  this.assert(instances.length > 0,
    "Expected a rendered instance of the type '" + getDisplayName(type) + "' " +
    "to be found under '" + this.path + "'"
  );

  return chain(this, {
    components: instances,
    path: getDisplayName(type)
  });
};

Spt._findAllComponents = function(type, cond) {
  var nodes = this.nodes;
  var components = this.components.reduce(function(list, component) {
    return list.concat(
      Selectors.findComponentsByType(component, type, cond, nodes)
    );
  }, []);

  this.assert(components.length > 0,
    "Expected one or more rendered instances of the type '" +
    getDisplayName(type) + "' to be found under '" + this.path + "'"
  );

  return chain(this, {
    components: components,
    path: getDisplayName(type) + '[]'
  });
};

Spt._findAllNodes = function(selector, cond) {
  var nodes = this.nodes
    .reduce(function(list, parentNode) {
      return list.concat(
        Selectors.findAll(selector, { container: parentNode })
      );
    }, [])
    .filter(cond || alwaysTrue)
  ;

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
 * component(s).
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
 * Like [[#warp]] but only affects the DOM nodes.
 *
 *     drill(component)
 *       .find(PikadayDatePicker)
 *         .warpToNode(component => component.pikaday.el)
 *           .find('button', m.hasText('Choose date'))
 *             .click()
 *
 * Warping is shown in practice in [[this example | examples/teleporting.md]].
 *
 * @param  {function(React.Component): HTMLElement} nodeLocator
 * @param  {String} name
 * @return {Scope}
 */
Scope.prototype.warpToNode = function(nodeLocator, name) {
  var targetNodes = this.components.map(function(component) {
    return nodeLocator(component)
  }).filter(truthy)

  return chain(this, {
    components: this.components,
    nodes: targetNodes,
    path: name || DEFAULT_NAME
  })
};

/**
 * Change this scope into another type provided by an addon or by your own
 * implementation.
 *
 *     class CustomScope extends Scope {
 *       smack() {
 *         console.log('ouch')
 *
 *         return this
 *       }
 *     }
 *
 *     drill(component)
 *       .morph(CustomScope)  // => CustomScope
 *         .smack()           // => "ouch"
 *                            // => CustomScope
 *                            //
 *                            // You can still use the stock Scope APIs:
 *         .find('button')    // => CustomScope
 *
 * @param  {Class}
 * @return {Class}
 */
Spt.morph = function(otherType) {
  return new otherType(
    this.components,
    this.nodes,
    this.path,
    this.parentScope
  )
}

/**
 * Find out whether the current scope contains a certain element.
 *
 * This is a graceful version of [[#find]] that will not throw any errors if
 * the target could not be found.
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
  return new this.constructor(
    this.components,
    null,
    this.path,
    this.parentScope
  )
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

/**
 * Create a reference to a property found on the scope's first component that
 * will survive through the drilling.
 *
 * This is for advanced usage and is really discouraged unless you have no
 * other choice (e.g. you're interfacing with a non-React library.)
 *
 *     const scope = drill(component)
 *       .find(JQueryChosen)
 *         .ref('chosen', component => component._chzn)
 *
 *     scope.refs.chosen // => Object
 *     scope
 *       .find('blah')
 *         .refs.chosen  // => Object
 *
 * @param  {String} key
 * @param  {function(React.Component): Any} extract
 * @return {Scope}
 */
Spt.ref = function(key, extract) {
  this.refs[key] = extract(this.component);

  return this;
};

module.exports = Scope;

// -----------------------------------------------------------------------------
// INTERNAL
// -----------------------------------------------------------------------------

function buildPath(scope, childPath) {
  return [ scope, childPath ].join(' > ');
}

function clone(scope) {
  return new scope.constructor(scope.components, scope.nodes, scope.path, scope);
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

function truthy(x) {
  return !!x
}
