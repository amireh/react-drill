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
});