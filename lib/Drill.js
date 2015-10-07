var DOMHelpers = require('./DOMHelpers');
var React = require('react');
var invariant = require('react/lib/invariant');

function isReactType(object) {
  return object instanceof Function && object.hasOwnProperty('displayName');
}

function buildPath(drill, childPath) {
  return [ drill, childPath ].join(' > ');
}

function Drill(component, nodes, path, parentScope) {
  if (!(this instanceof Drill)) {
    return new Drill(component, nodes, path);
  }

  invariant(!!component, "You must drill into a component!");

  this.component = component;
  this.nodes = nodes || [ React.findDOMNode(component) ];
  this.path = path || component.constructor.displayName;
  this.parentScope = parentScope;

  return this;
}

var Dpt = Drill.prototype;

Object.defineProperty(Dpt, 'node', {
  get: function() {
    return this.nodes[0];
  }
});

Dpt.toString = function() {
  return this.path;
};

Dpt.findComponentByType = function(type, cond) {
  var instance = DOMHelpers.findComponentByType(this.component, type, cond);

  if (!instance) {
    throw new Error(
      "Expected a rendered instance of the type '" + type.displayName + "' " +
      "to be found under '" + this.path + "'"
    );
  }

  return new Drill(instance, null, buildPath(this, type.displayName), this);
};

Dpt.findByType = function(type, cond) {
  var node = DOMHelpers.findByType(this.component, type, cond);

  if (!node) {
    throw new Error(
      "Expected a rendered instance of the type '" + type.displayName + "' " +
      "to be found under '" + this.path + "'"
    );
  }

  return new Drill(this.component, [ node ], buildPath(this, type.displayName), this);
};

Dpt.findBySelector = function(selector, cond) {
  var selection = DOMHelpers.findAll(selector, { container: this.node });

  if (cond) {
    selection = selection.filter(cond);
  }

  if (!selection.length) {
    throw new Error(
      "Expected a DOM node to be found using the selector '" + selector + "' " +
      "under '" + this.path + "'"
    );
  }

  return new Drill(this.component, selection, buildPath(this, selector), this);
};

Dpt.find = function(selector, cond) {
  if (isReactType(selector)) {
    return this.findComponentByType(selector, cond);
  }
  else {
    return this.findBySelector(selector, cond);
  }
};

Dpt.findAll = function(selector) {
  return new Drill(
    this.component,
    DOMHelpers.findAll(selector, { container: this.node }),
    buildPath(this, selector + '[]'),
    this
  );
};

Drill.registerHTMLElementMethod = function(name, method) {
  Dpt[name] = function runAgainstMyNodes() {
    var args = [].slice.call(arguments);

    this.nodes.forEach(function(node) {
      method.apply(null, [node].concat(args));
    });

    return this;
  };
};

Dpt.end = function() {
  return this.parentScope || this;
};

// TODO: we're already strict by default
Dpt.strict = function() {
  return this;
};

// TODO: a better approach, we need a non-strict mode
Dpt.has = function(node, cond) {
  try {
    this.find(node, cond);
    return true;
  }
  catch(e) {
    return false;
  }
};

module.exports = Drill;
