const { drill, Actions, Matchers, Scope, Selectors } = require('../');
const reactSuite = require('test/helpers/reactSuite');
const sinon = require('sinon')

describe('Scope', function() {
  const React = require('react');
  const Root = React.createClass({
    render() {
      return <div />
    }
  })

  describe('drill.registerAction', function() {
    const suite = reactSuite(this, Root);

    beforeEach(function () {
      suite.render();
    });

    afterEach(function() {
      delete Scope.prototype.foo;
    });

    it('exposes a method', function() {
      drill.registerAction('foo', Function.prototype);
      assert.ok(drill(suite.component).foo instanceof Function);
    });

    it('yields the current node as the first argument', function(done) {
      drill.registerAction('foo', function(node) {
        assert.ok(node instanceof HTMLElement);
        assert.ok(node === suite.node);

        done();
      });

      drill(suite.component).foo();
    });

    it('yields all additional args it was invoked with', function(done) {
      drill.registerAction('foo', function(node, arg1, arg2) {
        assert.equal(arg1, 1);
        assert.equal(arg2, 'a');

        done();
      });

      drill(suite.component).foo(1, 'a');
    });

    it('invokes the method for every drilled node', function() {
      var callCount = 0;

      drill.registerAction('foo', function() {
        callCount++;
      });

      drill(suite.component, [
        document.createElement('div'),
        document.createElement('div'),
      ]).foo();

      assert.equal(callCount, 2);
    })
  });

  describe('drill.DOMHelpers', function() {
    beforeEach(() => {
      sinon.stub(console, 'warn')
    })

    afterEach(() => {
      console.warn.restore()
    })

    it('is deprecated', function() {
      drill.DOMHelpers

      sinon.assert.calledWith(
        console.warn,
        sinon.match(/Deprecated: drill\.DOMHelpers has been renamed to drill\.Actions/)
      )

      assert.equal(drill.DOMHelpers, Actions)
      assert.equal(drill.Actions, Actions)
    })
  })

  describe('drill.DOMSelectors', function() {
    beforeEach(() => {
      sinon.stub(console, 'warn')
    })

    afterEach(() => {
      console.warn.restore()
    })

    it('is deprecated', function() {
      drill.DOMSelectors

      sinon.assert.calledWith(
        console.warn,
        sinon.match(/Deprecated: drill\.DOMSelectors has been renamed to drill\.Selectors/)
      )

      assert.equal(drill.DOMSelectors, Selectors)
      assert.equal(drill.Selectors, Selectors)
    })
  })

  describe('drill.registerMatcher', function() {
    const matcher = function() {}

    afterEach(function() {
      delete Matchers.foo;
    });

    it('exposes a method', function() {
      drill.registerMatcher('foo', matcher);

      assert.equal(Matchers.foo, matcher)
    });
  })

  describe('drill.registerExtension', function() {
    const extension = function() {}

    afterEach(function() {
      delete Scope.prototype.foo;
    });

    it('exposes a method', function() {
      drill.registerExtension('foo', extension);

      assert.equal(Scope.prototype.foo, extension)
    });
  })
});
