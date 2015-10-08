const DOMHelpers = require('../DOMHelpers');
const React = require('react');
const { assert } = require('chai');
const reactSuite = require('test/helpers/reactSuite');

describe('DOMHelpers', function() {
  describe('#typeIn', function() {
    const { typeIn } = DOMHelpers;

    const suite = reactSuite(this, React.createClass({
      render() {
        return <input value={this.props.value} onChange={this.props.onChange} />;
      }
    }));

    it('types in 1 character at a time', function(done) {
      let callCount = 0;

      suite.component.setProps({
        value: '',

        onChange(e) {
          assert.equal(e.target.value, 'Pi'.split('')[callCount++]);

          if (callCount === 'Pi'.length) {
            done();
          }
        }
      });

      typeIn(suite.node, 'Pi');
    });
  });
});