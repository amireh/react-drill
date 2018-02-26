const Actions = require('../Actions');
const React = require('react');
const { assert } = require('chai');
const reactSuite = require('test/helpers/reactSuite');

describe('Actions', function() {
  describe('#typeIn', function() {
    const { typeIn } = Actions;

    const Root = React.createClass({
      render() {
        return <input value={this.props.value} onChange={this.props.onChange} />;
      }
    });

    const suite = reactSuite(this, Root);

    it('types in 1 character at a time', function(done) {
      let callCount = 0;

      suite.render({
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
