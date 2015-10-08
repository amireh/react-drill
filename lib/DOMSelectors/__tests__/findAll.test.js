const findAll = require('../findAll');
const reactSuite = require('test/helpers/reactSuite');

describe('DOMSelectors#findAll', function() {
  reactSuite(this, require('test/fixtures/ElementWithButtons'));

  it('returns an array', function() {
    assert.ok(Array.isArray(findAll('button')));
  });

  it('locates elements by a jQuery selector', function() {
    assert.equal(findAll('button').length, 2);
  });
});