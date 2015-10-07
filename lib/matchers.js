exports.hasText = function(text) {
  return function(node) {
    return node.textContent.indexOf(text) > -1;
  };
};

exports.hasClass = function(className) {
  return function(node) {
    return node.className.match(className);
  }
};

exports.hasAttribute = function(key, value) {
  if (arguments.length === 2) {
    return function(node) {
      return node.getAttribute(key) === value;
    }
  }
  else {
    return function(node) {
      return node.hasAttribute(key);
    }
  }
};