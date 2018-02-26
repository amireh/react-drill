module.exports = function deprecate(message, fn) {
  return function() {
    console.warn('Deprecated: ' + message)

    return fn.apply(null, arguments)
  }
}
