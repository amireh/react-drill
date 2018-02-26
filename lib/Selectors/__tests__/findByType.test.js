const findByType = require('../findByType');
const reactSuite = require('test/helpers/reactSuite');
const Button = require('test/fixtures/Button');
const m = require('../../Matchers');

describe('Selectors#findByType', function() {
  const suite = reactSuite(this, require('test/fixtures/ElementWithButtons'));

  beforeEach(function () {
    suite.render();
  });

  it('returns a node for a given type', function() {
    assert.equal(
      findByType(suite.component, Button).tagName,
      'BUTTON'
    );
  });

  it('matches against a predicate', function() {
    assert.ok(
      findByType(suite.component, Button, m.hasAttribute('type', 'cancel'))
    );
  });

  it('works with a querySelector for a predicate', function() {
    const node = findByType(suite.component, Button, '[type="cancel"]');

    assert.ok(node);
    assert.equal(node.getAttribute('type'), 'cancel');
  });
});
