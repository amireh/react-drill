const find = require('../find');
const reactSuite = require('test/helpers/reactSuite');
const $ = require('jquery');

describe('Selectors#find', function() {
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

  [
    {
      node: document.createElement('div'),
      name: 'HTMLElement'
    },
    {
      node: document.createElement('svg'),
      name: 'SVGSVGElement'
    },
  ].forEach(function(entry) {
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
