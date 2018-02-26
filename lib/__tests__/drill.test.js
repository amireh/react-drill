const { drill, Scope } = require('../');
const reactSuite = require('test/helpers/reactSuite');

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
});
