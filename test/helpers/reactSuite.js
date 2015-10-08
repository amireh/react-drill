const React = require('react');
const DOMSelectors = require('../../lib/DOMSelectors');

function reactSuite(mochaSuite, Type, initialProps) {
  let API = {};
  let component, container;

  Object.defineProperty(API, 'component', {
    get() {
      return component;
    }
  });

  Object.defineProperty(API, 'node', {
    get() {
      return React.findDOMNode(component);
    }
  });

  Object.defineProperty(API, 'parentNode', {
    get() {
      return container;
    }
  });

  mochaSuite.beforeEach(function() {
    container = document.createElement('div');
    component = React.render(<Type {...initialProps || {}} />, container);

    DOMSelectors.setRootNode(container);
  });

  mochaSuite.afterEach(function() {
    React.unmountComponentAtNode(container);
    container.remove();

    component = undefined;
    container = undefined;
    DOMSelectors.setRootNode(undefined);
  });

  return API;
}

module.exports = reactSuite;