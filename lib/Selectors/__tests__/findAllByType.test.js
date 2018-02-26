const findAllByType = require('../findAllByType');
const reactSuite = require('test/helpers/reactSuite');
const Button = require('test/fixtures/Button');
const m = require('../../Matchers');

describe('Selectors#findAllByType', function() {
  const suite = reactSuite(this, require('test/fixtures/ElementWithButtons'));

  beforeEach(function () {
    suite.render();
  });

  it('returns a node for a given type', function() {
    const nodes = findAllByType(suite.component, Button);

    assert.equal(nodes.length, 2);
    assert.ok(nodes[0] instanceof HTMLElement);
  });

  it('matches against a predicate', function() {
    const nodes = findAllByType(
      suite.component, Button, m.hasAttribute('type', 'cancel')
    );

    assert.equal(nodes.length, 1);
  });

  it('works with a querySelector for a predicate', function() {
    const nodes = findAllByType(suite.component, Button, '[type="cancel"]');

    assert.equal(nodes.length, 1);
    assert.equal(nodes[0].getAttribute('type'), 'cancel');
  });
});
