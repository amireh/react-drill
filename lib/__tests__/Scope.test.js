const React = require('react');
const ReactDOM = require('react-dom');
const createReactClass = require('create-react-class')
const Scope = require('../Scope');
const m = require('../Matchers');
const reactSuite = require('test/helpers/reactSuite');
const Button = require('test/fixtures/Button');
const Link = require('test/fixtures/Link');
const Icon = require('test/fixtures/Icon');
const ElementWithButtons = require('test/fixtures/ElementWithButtons');
const sinon = require('sinon');
const drill = Scope;

class Root extends React.Component {
  render() {
    return (
      <div>
        <Button id="firstButton">
          <span className="foo" />
        </Button>

        <span />
        <Button id="secondButton" />

        <Link>Foo</Link>

        <Modal>
          <div>
            <p>Hello from modal!</p>
            <Button id="modalButton" />
          </div>
        </Modal>

        <ElementWithButtons {...this.props} />
      </div>
    );
  }
}

class ReloadComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { p: false };
  }

  render() {
    return this.state.p ? <p /> : <div />;
  }
}

class ModalPortal extends React.Component {
  render() {
    return (
      React.Children.only(this.props.children)
    )
  }
}

class Modal extends React.Component {
  componentDidMount() {
    this.container = document.createElement('div')

    const that = this
    ReactDOM.render(<ModalPortal {...this.props} />, this.container, function() {
      that.portal = this
    })
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.container);

    this.portal = null
    this.container = null
  }

  render() {
    return <div />;
  }
}

describe('Scope with a stateless component', function() {
  const StatelessButton = props => <div {...props}><button /></div>
  const StatefulComponent = StatelessComponent => createReactClass({
    displayName: `Stateful(${StatelessComponent.name})`,
    render() {
      return <StatelessComponent {...this.props} />
    }
  })

  context('with the component for root', function() {
    const suite = reactSuite(this, StatelessButton);

    beforeEach(function () {
      suite.render();
    })

    it('does not work', function() {
      assert.throws(function() {
        drill(suite.component)
      }, 'You must drill into a component!')
    })
  })

  context('with the component rendered somewhere down the tree', function() {
    const suite = reactSuite(this, StatefulComponent(StatelessButton));

    beforeEach(function () {
      suite.render();
    })

    it('does not work either', function() {
      assert.notOk( drill(suite.component).has(StatelessButton) )
    })
  })
})

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

  describe('#_findComponent', function() {
    it('works', function() {
      assert.ok(drill(suite.component)._findComponent(Button));
    });

    it('yields a new Scope', function() {
      assert.equal(
        drill(suite.component)
          ._findComponent(Button).constructor,
        Scope
      );
    });

    it('locates the rendered component instance', function() {
      const scope = drill(suite.component)._findComponent(Button);
      assert.ok(scope.component.constructor === Button);
    });

    it('bails if no rendered instance could be found', function() {
      assert.throws(function() {
        drill(suite.component)._findComponent(Icon);
      }, /Expected a rendered instance of.*Icon/);
    });

    it('accepts a predicate', function() {
      assert.throws(function() {
        drill(suite.component)._findComponent(Button, () => false);
      }, /Expected a rendered instance/);
    });
  });

  describe('#_findNode', function() {
    it('works', function() {
      assert.doesNotThrow(function() {
        drill(suite.component)._findNode('button')
      });
    });

    it('yields a new Scope', function() {
      assert.ok(
        drill(suite.component)._findNode('button') instanceof Scope
      );
    });

    it('locates the rendered component DOM node', function() {
      const scope = drill(suite.component)._findNode('button');

      assert.equal(scope.node, suite.node.querySelector('button'));
    });

    it('bails if no rendered instance could be found', function() {
      assert.throws(function() {
        drill(suite.component)._findNode('.icon');
      }, /Expected a DOM node.*\.icon/);
    });

    it('accepts a predicate', function() {
      const scope = drill(suite.component)
        ._findNode('span', n => n.className === 'foo')
      ;

      assert.equal(scope.node, suite.node.querySelector('span.foo'));
    });

    it('bails if predicate fails', function() {
      assert.throws(function() {
        drill(suite.component)._findNode('span', () => false);
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
        drill(suite.component)._findComponent(Button).node
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
      const scope = drill(suite.component).findAll(Button, m.hasAttribute('id'))

      assert.equal(scope.nodes.length, 2);
      assert.equal(scope.nodes[0].id, 'firstButton')
      assert.equal(scope.nodes[1].id, 'secondButton')

      assert.equal(scope.components.length, 2);
      assert.equal(scope.components[0].props.id, 'firstButton')
      assert.equal(scope.components[1].props.id, 'secondButton')
    });

    it('works with DOM nodes under types', function() {
      const scope = drill(suite.component)
        .findAll(Button, m.hasAttribute('id'))
          .findAll('span')

      assert.equal(scope.nodes.length, 1)
    })

    it('lets me apply actions on multiple component nodes', function() {
      let submitted
      let canceled

      suite.render({
        onSubmit: () => { submitted = true },
        onCancel: () => { canceled = true }
      })

      drill(suite.component)
        .find(ElementWithButtons)
          .findAll(Button)
            .click()

      assert.ok(submitted)
      assert.ok(canceled)
    })

    it('returns the element itself if no descendants matched but it itself matched', function() {
      assert.equal(
        drill(suite.component)
          .find(ElementWithButtons)
            .find('div.root-element')
              .node,
        drill(suite.component)
          .find(ElementWithButtons)
            .node
      )
    })
  });

  describe('path building', function() {
    it('works on the root scope', function() {
      assert.equal(drill(suite.component).path, 'Root');
    });

    it('works with #_findAllComponents', function() {
      assert.equal(
        drill(suite.component)._findAllComponents(Button).path,
        'Root > Button[]'
      );
    });

    it('works with #_findNode', function() {
      assert.equal(
        drill(suite.component)._findNode('.foo').path,
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

    it('returns itself if it is the root', function() {
      const scope = drill(suite.component)

      assert.equal(scope.end(), scope)
    })
  });

  describe('#warp', function() {
    let scope

    beforeEach(() => {
      scope = drill(suite.component)
        .find(Modal)
          .warp(x => x.portal)
    })

    afterEach(() => {
      scope = null
    })

    it('re-scopes to the yielded component', function() {
      assert.equal(scope.component.constructor, ModalPortal)
    });

    it("re-scopes to the yielded component's DOM node", function() {
      assert.equal(scope.node.tagName, 'DIV')
      assert.equal(scope.node.textContent, 'Hello from modal!')
    })

    it('constructs the path properly', function() {
      assert.equal(scope.toString(), 'Root > Modal > ModalPortal')
    })

    it('whines if the warp goes to a non-existent component', function() {
      assert.throws(function() {
        drill(suite.component).warp(() => null)
      }, 'You must drill into a component!')
    })
  });

  describe('#has', function() {
    it('tells me if a scope contains a node', function() {
      assert.ok(drill(suite.component).has(Button));
    });

    it('tells me if a scope does not contain a node', function() {
      assert.notOk(drill(suite.component).has(Button, () => false));
    });

    it('propagates internal errors', function() {
      const scope = drill(suite.component)

      assert.throws(function() {
        scope.has(Button, () => { throw new Error('boom') })
      }, 'boom')
    })
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

  describe('.registerHTMLElementMethod', function() {
    beforeEach(() => {
      sinon.stub(console, 'warn')
    })

    afterEach(() => {
      console.warn.restore()
    })

    it('is deprecated', function() {
      const action = function() {}

      assert.equal(Scope.prototype.foo, undefined)

      Scope.registerHTMLElementMethod('foo', action)

      sinon.assert.calledWith(
        console.warn,
        sinon.match(/Deprecated: Scope\.registerHTMLElementMethod/)
      )

      assert.equal(typeof Scope.prototype.foo, 'function')

      delete Scope.prototype.foo
    })
  })
});

describe('Scope - descendant constraints', function() {
  class Component extends React.Component {
    render() {
      return (
        <div>
          <div id="buttonContainer">
            <Button />
          </div>

          <div id="linkContainer">
            <Link />
          </div>

          <div id="plainButtonContainer">
            <button />
          </div>

          <div id="plainLinkContainer">
            <a />
          </div>
        </div>
      )
    }
  }

  const suite = reactSuite(this, Component);

  beforeEach(function () {
    suite.render();
  })

  it('rejects components whose DOM nodes are not descendants of the current nodes', function() {
    assert.notOk(
      drill(suite.component)
        .find('div#buttonContainer')
          .has(Link)
    )
  })

  it('accepts components whose DOM nodes are descendants of the current nodes', function() {
    assert.ok(
      drill(suite.component)
        .find('div#buttonContainer')
          .has(Button)
    )
  })

  it('rejects DOM nodes that are not descendants of the current nodes', function() {
    assert.notOk(
      drill(suite.component)
        .find('div#plainButtonContainer')
          .has('a')
    )
  })

  it('accepts DOM nodes that are descendants of the current nodes', function() {
    assert.ok(
      drill(suite.component)
        .find('div#plainButtonContainer')
          .has('button')
    )
  })
})
