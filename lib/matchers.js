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