var ReactBlessedIDOperations = require('react-blessed/dist/ReactBlessedIDOperations');
var DOM = require('../../lib/DOM');
var Scope = require('../../lib/Scope');

function BlessedScope() {
  return Scope.apply(this, arguments);
}

BlessedScope.prototype = Object.create(Scope.prototype);

BlessedScope.prototype.findBySelector = function(name, p) {
  var nodes = findChildren(this.node, matchByName(name)).filter(p || Truthy);

  this.assert(nodes.length > 0,
    "Expected a DOM node to be found using the selector '" + name + "' " +
    "under '" + this.path + "'"
  );

  return new BlessedScope(this.component, nodes, [ this.toString(), name ].join(' > '), this);
};

DOM.findDOMNode = function(instance) {
  var nodeId = instance._reactInternalInstance._rootNodeID;

  return ReactBlessedIDOperations.get(nodeId);
};

module.exports = drill;
module.exports.drill = drill;
module.exports.Scope = BlessedScope;
module.exports.m = {
  hasText: hasText
};

module.exports.q = {
  getTextContent: getTextContent,
  findChildren: findChildren
};

// INTERNALS

function drill(component, nodes) {
  return new BlessedScope(component, nodes);
}

function findChildren(ancestor, p, nodes) {
  nodes = nodes || [];

  ancestor.children.forEach(function(node) {
    if (p(node)) {
      nodes.push(node);
    }

    findChildren(node, p, nodes);
  });

  return nodes;
}

function Truthy() { return true }

function getTextContent(node) {
  return [ node ].concat(findChildren(node, Truthy)).map(function(n) {
    return n.content;
  }).join(' ');
}

function matchByName(name) {
  return function(node) {
    return node.constructor.name.toLowerCase() === name;
  };
}

function hasText(text) {
  return function(node) {
    return getTextContent(node).match(text);
  };
}
