const React = require('react')
const createReactClass = require('create-react-class')
const { getDisplayName, isReactType } = require('../utils');
const { assert } = require('chai');

describe('utils::getDisplayName', function() {
  [
    {
      name: 'createReactClass() with specific displayName',
      input: () => createReactClass({ displayName: 'foo', render: () => null }),
      output: 'foo'
    },
    {
      name: 'createReactClass() with no displayName: it uses the identifier',
      input: () => createReactClass({
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
      output: '<<unknown>>'
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
      name: 'class named "Function"',
      input: () => class Function extends React.Component {
        render() {
          return null
        }
      },
      output: 'Function'
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

describe('utils::isReactType', function() {
  it('is true for a stateless component', function() {
    const StatelessComponent = () => <div />

    assert.ok(isReactType(StatelessComponent))
  })
})

function mebbeEval(x) {
  return typeof x === 'function' ? x() : x
}
