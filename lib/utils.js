var DEFAULT_NAME = exports.DEFAULT_NAME = '<<unknown>>'

exports.getDisplayName = function(component) {
  return (
    // createReactClass
    component.displayName ||

    // class components
    (
      component.constructor &&
      (
        component.constructor.displayName ||
        component.constructor.name !== 'Function' && component.constructor.name
      )
    ) ||

    // stateless components / functions
    component.name ||

    DEFAULT_NAME
  )
}

exports.canUseDataTransfer = function() {
  try {
    /* eslint-disable */
    var dt = new DataTransfer();
    /* eslint-enable */

    dt = null;

    return true;
  }
  catch (e) {
    if (e.message === 'Illegal constructor.') {
      return false;
    }
    else {
      throw e;
    }
  }
}

exports.deprecate = function(message, fn) {
  return function() {
    console.warn('Deprecated: ' + message)

    return fn.apply(null, arguments)
  }
}

exports.isReactType = function(object) {
  return object instanceof Function;
}
