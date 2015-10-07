const React = require('react');
const Drill = require('../Drill');
const { assert } = require('chai');
const drill = Drill;

const Root = React.createClass({
  displayName: 'Root',

  render() {
    return (
      <div>
        <Button>
          <span className="foo" />
        </Button>

        <span />
      </div>
    );
  }
});

const Button = React.createClass({
  displayName: 'Button',

  render() {
    return <button {...this.props} />
  }
});

const Icon = React.createClass({
  displayName: 'Icon',

  render() {
    return <span {...this.props} />
  }
});

describe('Drill', function() {
  let container, el;

  beforeEach(function() {
    container = document.createElement('div');
    el = React.render(<Root />, container);
  });

  afterEach(function() {
    React.unmountComponentAtNode(container);
    container.remove();
    el = null;
  });

  it('works', function() {
    assert.doesNotThrow(function() {
      drill(el);
    });
  });

  describe('#findComponentByType', function() {
    it('works', function() {
      assert.ok(drill(el).findComponentByType(Button));
    });

    it('yields a new Drill', function() {
      assert.ok(drill(el).findComponentByType(Button).constructor === Drill);
    });

    it('locates the rendered component instance', function() {
      const scope = drill(el).findComponentByType(Button);
      assert.ok(scope.component.constructor === Button);
    });

    it('bails if no rendered instance could be found', function() {
      assert.throws(function() {
        drill(el).findComponentByType(Icon);
      }, /Expected a rendered instance of.*Icon/);
    });

    it('accepts a predicate', function() {
      assert.throws(function() {
        drill(el).findComponentByType(Button, () => false);
      }, /Expected a rendered instance/);
    });
  });

  describe('#findByType', function() {
    it('works', function() {
      assert.ok(drill(el).findByType(Button));
    });

    it('yields a new Drill', function() {
      assert.ok(drill(el).findByType(Button).constructor === Drill);
    });

    it('locates the rendered component DOM node', function() {
      const scope = drill(el).findByType(Button);
      assert.ok(scope.node === React.findDOMNode(el).querySelector('button'));
    });

    it('bails if no rendered instance could be found', function() {
      assert.throws(function() {
        drill(el).findByType(Icon);
      }, /Expected a rendered instance of.*Icon/);
    });

    it('accepts a predicate', function() {
      assert.throws(function() {
        drill(el).findByType(Button, () => false);
      }, /Expected a rendered instance/);
    });
  });


  describe('#findBySelector', function() {
    it('works', function() {
      assert.doesNotThrow(function() {
        drill(el).findBySelector('button')
      });
    });

    it('yields a new Drill', function() {
      assert.ok(drill(el).findBySelector('button').constructor === Drill);
    });

    it('locates the rendered component DOM node', function() {
      const scope = drill(el).findBySelector('button');
      assert.ok(scope.node === React.findDOMNode(el).querySelector('button'));
    });

    it('bails if no rendered instance could be found', function() {
      assert.throws(function() {
        drill(el).findBySelector('.icon');
      }, /Expected a DOM node.*\.icon/);
    });

    it('accepts a predicate', function() {
      const scope = drill(el).findBySelector('span', n => n.className === 'foo');
      assert.ok(scope.node === React.findDOMNode(el).querySelector('span.foo'));
    });

    it('bails if predicate fails', function() {
      assert.throws(function() {
        drill(el).findBySelector(Button, () => false);
      }, /Expected a DOM node/);
    });
  });

  describe('#find', function() {
    it('works with a jQuery selector', function() {
      assert.ok(drill(el).find('button').node);
    });

    it('bails if the node could not be located', function() {
      assert.throws(function() {
        drill(el).find('.something');
      });
    });

    it('works with a React component type', function() {
      assert.equal(
        drill(el).find(Button).node,
        drill(el).findComponentByType(Button).node
      );
    });
  });

  describe('#findAll', function() {
    it('works', function() {
      assert.equal(drill(el).findAll('span').nodes.length, 2);
    });
  });

  describe('.registerHTMLElementMethod', function() {
    afterEach(function() {
      delete Drill.prototype.foo;
    });

    it('exposes a method', function() {
      Drill.registerHTMLElementMethod('foo', Function.prototype);
      assert.ok(drill(el).foo instanceof Function);
    });

    it('yields the current node as the first argument', function(done) {
      Drill.registerHTMLElementMethod('foo', function(node) {
        assert.ok(node instanceof HTMLElement);
        assert.ok(node === React.findDOMNode(el));

        done();
      });

      drill(el).foo();
    });

    it('yields all additional args it was invoked with', function(done) {
      Drill.registerHTMLElementMethod('foo', function(node, arg1, arg2) {
        assert.equal(arg1, 1);
        assert.equal(arg2, 'a');

        done();
      });

      drill(el).foo(1, 'a');
    });

    it('invokes the method for every drilled node', function() {
      var callCount = 0;

      Drill.registerHTMLElementMethod('foo', function() {
        callCount++;
      });

      drill(el, [
        document.createElement('div'),
        document.createElement('div'),
      ]).foo();

      assert.equal(callCount, 2);
    })
  });

  describe('path building', function() {
    it('works with components', function() {
      assert.equal(drill(el).path, 'Root');
      assert.equal(drill(el).find(Button).path, 'Root > Button');
    });

    it('works with jQuery selectors', function() {
      assert.equal(drill(el).find('button').path, 'Root > button');
      assert.equal(drill(el).find('.foo').path, 'Root > .foo');
    });

    it('works with findAll', function() {
      assert.equal(drill(el).findAll('span').path, 'Root > span[]');
    });

    it('works with both', function() {
      assert.equal(
        drill(el)
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
      assert.equal(drill(el).find(Button).end().toString(), 'Root');
      assert.equal(
        drill(el)
          .find(Button)
          .find('span')
            .end()
            .toString()
        ,
        'Root > Button'
      );
    });
  });
});