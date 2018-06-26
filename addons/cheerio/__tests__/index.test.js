const addon = require('../')
const $ = require('cheerio')
const { assert } = require('test/helpers')
const { drillIntoNode, m } = require('react-drill')

describe('react-drill-cheerio', function() {
  const node = $(`
    <div>
      <button>First</button>
      <button>Second</button>
      <a href="foo" class="foo bar">Back</a>
    </div>
  `)

  const scope = drillIntoNode(node)

  beforeEach(function() {
    addon.activate()
  })

  afterEach(function() {
    addon.deactivate()
  })

  it('can use a cheerio container as a node for the scope', function() {
    assert.ok(scope)
  })

  it('can drill into cheerio nodes', function() {
    assert.ok(scope.has('button'))
    assert.ok(scope.has('a'))
    assert.equal(scope.findAll('a').nodes.length, 1)
    assert.equal(scope.findAll('button').nodes.length, 2)
  })

  describe('Matchers::hasText', function() {
    it('works', function() {
      assert.ok(
        scope.find('button', m.hasText('First')).node ===
        scope.find('button', m.hasText('First')).node
      )

      assert.notOk(
        scope.find('button', m.hasText('First')).node ===
        scope.find('button', m.hasText('Second')).node
      )

      assert.notOk(scope.has('button', m.hasText('blah')))
    })
  })

  describe('Matchers::hasAttribute', function() {
    it('compares values', function() {
      assert.ok(scope.has('a', m.hasAttribute('href', 'foo')))
      assert.notOk(scope.has('a', m.hasAttribute('href', 'bar')))
    })

    it('works when just testing for the existence of an attribute', function() {
      assert.ok(scope.has('a', m.hasAttribute('href')))
      assert.notOk(scope.has('a', m.hasAttribute('_target')))
    })
  })

  describe('Matchers::hasClass', function() {
    it('compares values', function() {
      assert.ok(scope.has('a', m.hasClass('foo')))
      assert.ok(scope.has('a', m.hasClass('bar')))
      assert.notOk(scope.has('a', m.hasClass('baz')))
    })
  })

  describe('Actions', function() {
    it('works', function() {
      scope.find('a')
        .click()
        .check()
        .uncheck()
        .select(true)
        .select(false)
        .typeIn('hi')
    })

    it('does not work for pure-DOM actions', function() {
      assert.throws(function() {
        scope.find('a').clickNative()
      }, /is not available for cheerio/)
    })
  })
})
