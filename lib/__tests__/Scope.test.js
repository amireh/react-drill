const React = require('react');
const Scope = require('../Scope');
const m = require('../matchers');
const reactSuite = require('test/helpers/reactSuite');
const Button = require('test/fixtures/Button');
const Link = require('test/fixtures/Link');
const Icon = require('test/fixtures/Icon');
const drill = Scope;

const Root = React.createClass({
  render() {
    return (
      <div>
        <Button id="firstButton">
          <span className="foo" />
        </Button>

        <span />
        <Button id="secondButton" />

        <Link>Foo</Link>
      </div>
    );
  }
});

const ReloadComponent = React.createClass({
  getInitialState() {
    return { p: false };
  },

  render() {
    return this.state.p ? <p /> : <div />;
  }
});

describe('Scope', function() {
  const suite = reactSuite(this, Root);

  beforeEach(function () {
    suite.render();
  });

  it('works', function() {
    assert.doesNotThrow(function() {
      drill(suite.component);
    });
  });

  describe('#findComponentByType', function() {
    it('works', function() {
      assert.ok(drill(suite.component).findComponentByType(Button));
    });

    it('yields a new Scope', function() {
      assert.equal(
        drill(suite.component)
          .findComponentByType(Button).constructor,
        Scope
      );
    });

    it('locates the rendered component instance', function() {
      const scope = drill(suite.component).findComponentByType(Button);
      assert.ok(scope.component.constructor === Button);
    });

    it('bails if no rendered instance could be found', function() {
      assert.throws(function() {
        drill(suite.component).findComponentByType(Icon);
      }, /Expected a rendered instance of.*Icon/);
    });

    it('accepts a predicate', function() {
      assert.throws(function() {
        drill(suite.component).findComponentByType(Button, () => false);
      }, /Expected a rendered instance/);
    });
  });

  describe('#findByType', function() {
    it('works', function() {
      assert.ok(drill(suite.component).findByType(Button));
    });

    it('works for components created with es6 classes', function() {
      assert.ok(drill(suite.component).findByType(Link));
    });

    it('yields a new Scope', function() {
      assert.ok(drill(suite.component).findByType(Button) instanceof Scope);
    });

    it('locates the rendered component DOM node', function() {
      const scope = drill(suite.component).findByType(Button);
      assert.ok(scope.node === suite.node.querySelector('button'));
    });

    it('bails if no rendered instance could be found', function() {
      assert.throws(function() {
        drill(suite.component).findByType(Icon);
      }, /Expected a rendered instance of.*Icon/);
    });

    it('accepts a predicate', function() {
      assert.throws(function() {
        drill(suite.component).findByType(Button, () => false);
      }, /Expected a rendered instance/);
    });
  });

  describe('#findBySelector', function() {
    it('works', function() {
      assert.doesNotThrow(function() {
        drill(suite.component).findBySelector('button')
      });
    });

    it('yields a new Scope', function() {
      assert.ok(
        drill(suite.component).findBySelector('button') instanceof Scope
      );
    });

    it('locates the rendered component DOM node', function() {
      const scope = drill(suite.component).findBySelector('button');

      assert.equal(scope.node, suite.node.querySelector('button'));
    });

    it('bails if no rendered instance could be found', function() {
      assert.throws(function() {
        drill(suite.component).findBySelector('.icon');
      }, /Expected a DOM node.*\.icon/);
    });

    it('accepts a predicate', function() {
      const scope = drill(suite.component)
        .findBySelector('span', n => n.className === 'foo')
      ;

      assert.equal(scope.node, suite.node.querySelector('span.foo'));
    });

    it('bails if predicate fails', function() {
      assert.throws(function() {
        drill(suite.component).findBySelector('span', () => false);
      }, /Expected a DOM node/);
    });
  });

  describe('#find', function() {
    it('works with a jQuery selector', function() {
      assert.equal(drill(suite.component).find('button').node.tagName, 'BUTTON');
    });

    it('bails if the node could not be located', function() {
      assert.throws(function() {
        drill(suite.component).find('.something');
      });
    });

    it('works with a React component type', function() {
      assert.equal(
        drill(suite.component).find(Button).node,
        drill(suite.component).findComponentByType(Button).node
      );
    });

    it('matches by an index', function() {
      assert.ok(drill(suite.component).has(Button, m.at(0)));
      assert.ok(drill(suite.component).has(Button, m.at(1)));

      assert.equal(drill(suite.component).find(Button, m.at(0)).node.id, 'firstButton')
      assert.equal(drill(suite.component).find(Button, m.at(1)).node.id, 'secondButton')
    })
  });

  describe('#findAll', function() {
    it('works', function() {
      assert.equal(drill(suite.component).findAll('span').nodes.length, 2);
    });

    it('works with types', function() {
      assert.equal(drill(suite.component).findAll(Button).nodes.length, 2);
    });
  });

  describe('.registerHTMLElementMethod', function() {
    afterEach(function() {
      delete Scope.prototype.foo;
    });

    it('exposes a method', function() {
      Scope.registerHTMLElementMethod('foo', Function.prototype);
      assert.ok(drill(suite.component).foo instanceof Function);
    });

    it('yields the current node as the first argument', function(done) {
      Scope.registerHTMLElementMethod('foo', function(node) {
        assert.ok(node instanceof HTMLElement);
        assert.ok(node === suite.node);

        done();
      });

      drill(suite.component).foo();
    });

    it('yields all additional args it was invoked with', function(done) {
      Scope.registerHTMLElementMethod('foo', function(node, arg1, arg2) {
        assert.equal(arg1, 1);
        assert.equal(arg2, 'a');

        done();
      });

      drill(suite.component).foo(1, 'a');
    });

    it('invokes the method for every drilled node', function() {
      var callCount = 0;

      Scope.registerHTMLElementMethod('foo', function() {
        callCount++;
      });

      drill(suite.component, [
        document.createElement('div'),
        document.createElement('div'),
      ]).foo();

      assert.equal(callCount, 2);
    })
  });

  describe('path building', function() {
    it('works on the root scope', function() {
      assert.equal(drill(suite.component).path, 'Root');
    });

    it('works with #findByType', function() {
      assert.equal(
        drill(suite.component).findByType(Button).path,
        'Root > Button'
      );
    });

    it('works with #findAllByType', function() {
      assert.equal(
        drill(suite.component).findAllByType(Button).path,
        'Root > Button[]'
      );
    });

    it('works with #findBySelector', function() {
      assert.equal(
        drill(suite.component).findBySelector('.foo').path,
        'Root > .foo'
      );
    });

    it('works with #findAll', function() {
      assert.equal(
        drill(suite.component).findAll('span').path,
        'Root > span[]'
      );
    });

    it('composes multiple scope paths', function() {
      assert.equal(
        drill(suite.component)
          .find(Button)
            .find('.foo')
            .path
        ,
        'Root > Button > .foo'
      );
    });
  });

  describe('#end', function() {
    it('works', function() {
      assert.equal(drill(suite.component).find(Button).end().toString(), 'Root');
      assert.equal(
        drill(suite.component)
          .find(Button)
          .find('span')
            .end()
            .toString()
        ,
        'Root > Button'
      );
    });
  });

  describe('#has', function() {
    it('tells me if a scope contains a node', function() {
      assert.ok(drill(suite.component).has(Button));
    });

    it('tells me if a scope does not contain a node', function() {
      assert.notOk(drill(suite.component).has(Button, () => false));
    });
  });

  describe('#reload', function() {
    const reloadSuite = reactSuite(this, ReloadComponent);

    beforeEach(function () {
      reloadSuite.render();
    });

    it('reloads the nodes for the current scope', function() {
      const { component } = reloadSuite;
      const scope = drill(component);
      assert.equal(scope.nodes[0].tagName, 'DIV');
      component.setState({ p: true });
      assert.equal(scope.nodes[0].tagName, 'DIV');
      assert.equal(scope.reload().nodes[0].tagName, 'P');
    });
  });
});
