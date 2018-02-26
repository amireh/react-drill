var DEFAULT_NAME = '<<unknown>>'

function getDisplayName(component) {
  return (
    // React.createClass
    component.displayName ||

    // class components
    (
      component.constructor &&
      component.constructor.displayName
    ) ||

    // stateless components / functions
    component.name ||

    DEFAULT_NAME
  )
}

exports.getDisplayName = getDisplayName
exports.DEFAULT_NAME = DEFAULT_NAME