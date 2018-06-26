const $ = require('jquery');
const ReactDOM = require('react-dom');
const reactSuite = require('test/helpers/reactSuite');
const Button = require('test/fixtures/Button');
const m = require('../Matchers');
const {
  find,
  findAll,
  findAllByType,
  findComponentByType,
  findComponentsByType
} = require('../Selectors');

describe('Selectors::find', function() {
  const suite = reactSuite(this, require('test/fixtures/ElementWithButtons'));

  beforeEach(function () {
    suite.render();
  });

  it('should find children', function() {
    assert.ok(find('.some-child'));
  });

  it('should find itself', function() {
    assert.equal(find('.root-element'), suite.node);
  });

  it('should return undefined when nothing is found', function() {
    assert.equal(find('.foo'), undefined);
  });

  it('should complain if selection is not to be resolved', function() {
    assert.throws(function() {
      find('.bar', {
        assert: true,
        action: 'test'
      })
    }, 'You are attempting to perform (test) on a node that does not exist!');
  });

  ([
    {
      node: document.createElement('div'),
      name: 'HTMLElement'
    },
    {
      node: document.createElement('svg'),
      name: 'SVGSVGElement'
    },
  ]).forEach(function(entry) {
    it(`should be a no-op when given a ${entry.name}`, function() {
      assert.equal(find(entry.node), entry.node);
    });
  });

  context('given a jQuery selection', function() {
    it('returns the first item in that selection', function() {
      assert.equal(find($(document.body)), document.body);
    });
  });
});

describe('Selectors::findAll', function() {
  const suite = reactSuite(this, require('test/fixtures/ElementWithButtons'));

  beforeEach(function () {
    suite.render();
  });

  it('returns an array', function() {
    assert.ok(Array.isArray(findAll('button')));
  });

  it('locates elements by a jQuery selector', function() {
    assert.equal(findAll('button').length, 2);
  });
});

describe('Selectors::findAllByType', function() {
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

describe('Selectors::findComponentByType', function() {
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

describe('Selectors::findComponentsByType', function() {
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
