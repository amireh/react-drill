const DOMHelpers = require('../DOMHelpers');
const React = require('react');
const { assert } = require('chai');

function reactSuite(mochaSuite, Type, initialProps) {
  mochaSuite.beforeEach(function() {
    this.container = document.createElement('div');
    this.subject = React.render(<Type {...initialProps || {}} />, this.container);
  });

  mochaSuite.afterEach(function() {
    React.unmountComponentAtNode(this.container);
    this.container.remove();

    this.subject = undefined;
    this.container = undefined;
  });
}

describe('DOMHelpers', function() {
  afterEach(function() {
    DOMHelpers.setRootNode(undefined);
  });

  describe('#find', function() {
    const { find } = DOMHelpers;

    reactSuite(this, React.createClass({
      render() {
        return (
          <div className="root-element">
            <div className="some-child" />
          </div>
        );
      }
    }));

    beforeEach(function() {
      DOMHelpers.setRootNode(this.container);
    });

    it('should find children', function() {
      assert.ok(find('.some-child'));
    });

    it('should find itself', function() {
      assert.equal(find('.root-element'), React.findDOMNode(this.subject));
    });

    it('should return undefined when nothing is found', function() {
      assert.equal(find('.foo'), undefined);
    });
  });

  describe('#typeIn', function() {
    reactSuite(this, React.createClass({
      render() {
        return <input value={this.props.value} onChange={this.props.onChange} />;
      }
    }));

    it('types in 1 character at a time', function(done) {
      const node = React.findDOMNode(this.subject);

      let callCount = 0;

      this.subject.setProps({
        value: '',

        onChange(e) {
          assert.equal(e.target.value, 'Pi'.split('')[callCount++]);

          if (callCount === 'Pi'.length) {
            done();
          }
        }
      });

      DOMHelpers.typeIn(node, 'Pi');
    });
  });
});