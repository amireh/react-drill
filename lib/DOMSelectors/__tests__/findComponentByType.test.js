const findComponentByType = require('../findComponentByType');
const reactSuite = require('test/helpers/reactSuite');
const Button = require('test/fixtures/Button');
const m = require('../../matchers');
const ReactDOM = require('react-dom');

describe('DOMSelectors#findComponentByType', function() {
  const suite = reactSuite(this, require('test/fixtures/ElementWithButtons'));

  beforeEach(function () {
    suite.render();
  });

  it('returns the first instance for a given type', function() {
    const instance = findComponentByType(suite.component, Button);

    assert.ok(instance);
    assert.ok(instance instanceof Button)
    assert.equal(ReactDOM.findDOMNode(instance).getAttribute('type'), 'submit');
  });

  it('matches against a predicate', function() {
    const instance = findComponentByType(
      suite.component, Button, m.hasAttribute('type', 'cancel')
    );

    assert.ok(instance);
    assert.equal(ReactDOM.findDOMNode(instance).getAttribute('type'), 'cancel');
  });

  it('works with a querySelector for a predicate', function() {
    const instance = findComponentByType(
      suite.component, Button, '[type="cancel"]'
    );

    assert.ok(instance);
    assert.equal(ReactDOM.findDOMNode(instance).getAttribute('type'), 'cancel');
  });
});
