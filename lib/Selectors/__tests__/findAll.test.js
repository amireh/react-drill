const findAll = require('../findAll');
const reactSuite = require('test/helpers/reactSuite');

describe('Selectors#findAll', function() {
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
