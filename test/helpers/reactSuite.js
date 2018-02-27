const React = require('react');
const ReactDOM = require('react-dom');
const { drill, Selectors } = require('../../');
const assign = require('object-assign');

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
      return ReactDOM.findDOMNode(component);
    }
  });

  Object.defineProperty(API, 'parentNode', {
    get() {
      return container;
    }
  });

  Object.defineProperty(API, 'scope', {
    get() {
      return drill(component);
    }
  });

  mochaSuite.beforeEach(function() {
    container = document.createElement('div');
    Selectors.setRootNode(container);
  });

  mochaSuite.afterEach(function() {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    component = undefined;
    container = undefined;
    Selectors.setRootNode(undefined);
  });

  API.render = function (props) {
    props = assign({}, initialProps, props || {})
    component = ReactDOM.render(<Type {...props} />, container);
  }

  API.autoRender = function() {
    mochaSuite.beforeEach(() => {
      API.render()
    })
  }

  return API;
}


module.exports = reactSuite;
