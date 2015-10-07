const m = require('../matchers');
const $ = require('jquery');
const { assert } = require('chai');

describe('matchers', function() {
  describe('#hasClass', function() {
    it('works', function() {
      const div = $('<div class="foo bar" />')[0];

      assert.ok(m.hasClass('foo')(div));
      assert.ok(!m.hasClass('bax')(div));
    });
  });

  describe('#hasText', function() {
    it('works', function() {
      const div = $('<div>Hello World!</div>')[0];

      assert.ok(m.hasText('Hello')(div));
      assert.ok(!m.hasText('What')(div));
    });
  });

  describe('#hasAttribute', function() {
    context('when given no value', function() {
      it('checks for the existence of the attr', function() {
        const div = $('<div value="3">Hello World!</div>')[0];

        assert.ok(m.hasAttribute('value')(div));
        assert.ok(!m.hasAttribute('class')(div));
      });
    });

    context('when given a value', function() {
      it('checks for the attr value', function() {
        const div = $('<div value="3">Hello World!</div>')[0];

        assert.ok(m.hasAttribute('value', '3')(div));
        assert.ok(!m.hasAttribute('value', 3)(div));
        assert.ok(!m.hasAttribute('value', 2)(div));
      });
    });
  });
});