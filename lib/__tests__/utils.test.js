const React = require('react')
const { getDisplayName } = require('../utils');
const { assert } = require('chai');

describe('utils::getDisplayName', function() {
  [
    {
      name: 'React.createClass() with specific displayName',
      input: () => React.createClass({ displayName: 'foo', render: () => null }),
      output: 'foo'
    },
    {
      name: 'React.createClass() with no displayName: it uses the identifier',
      input: () => React.createClass({
        render() {
          return null
        }
      }),
      output: 'input'
    },
    {
      name: 'anonymous React.Component class',
      input: () => class extends React.Component {
        render() {
          return null
        }
      },
      output: 'ReactComponent'
    },
    {
      name: 'named React.Component class',
      input: () => class XXX extends React.Component {
        render() {
          return null
        }
      },
      output: 'XXX'
    },
    {
      name: 'stateless component',
      input: () => () => <div />,
      output: '<<unknown>>'
    },
    {
      name: 'named stateless component',
      input: () => function XXX() { return <div /> },
      output: 'XXX'
    },
  ].forEach(({ name, input, output }) => {
    it(name, function() {
      assert.equal(getDisplayName(mebbeEval(input)), output)
    });

  })
})

function mebbeEval(x) {
  return typeof x === 'function' ? x() : x
}