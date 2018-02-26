const findComponentsByType = require('../findComponentsByType');
const reactSuite = require('test/helpers/reactSuite');
const Button = require('test/fixtures/Button');
const m = require('../../Matchers');
const ReactDOM = require('react-dom');

describe('Selectors#findComponentsByType', function() {
  const suite = reactSuite(this, require('test/fixtures/ElementWithButtons'));

  beforeEach(function () {
    suite.render();
  });

  it('returns the first instance for a given type', function() {
    const instances = findComponentsByType(suite.component, Button);

    assert.ok(instances);
    assert.ok(instances[0] instanceof Button);
    assert.equal(instances.length, 2);
  });

  it('matches against a predicate', function() {
    const instances = findComponentsByType(
      suite.component, Button, m.hasAttribute('type', 'cancel')
    );

    assert.ok(instances);
    assert.equal(instances.length, 1);
    assert.equal(ReactDOM.findDOMNode(instances[0]).getAttribute('type'), 'cancel');
  });

  it('works with a querySelector for a predicate', function() {
    const instances = findComponentsByType(
      suite.component, Button, '[type="cancel"]'
    );

    assert.ok(instances);
    assert.equal(instances.length, 1);
    assert.equal(ReactDOM.findDOMNode(instances[0]).getAttribute('type'), 'cancel');
  });
});
