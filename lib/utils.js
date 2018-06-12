var DEFAULT_NAME = '<<unknown>>'

function getDisplayName(component) {
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

exports.getDisplayName = getDisplayName
exports.DEFAULT_NAME = DEFAULT_NAME

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
