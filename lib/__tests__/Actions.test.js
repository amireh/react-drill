const { drill, m } = require('../');
const React = require('react');
const { assert, assertChange, createSweeper } = require('test/helpers');
const ReactDOM = require('react-dom');
const Button = require('test/fixtures/Button');
const { canUseDataTransfer } = require('../utils');

describe('Actions', function() {
  const sweep = createSweeper(this)
  const render = (component, container = document.createElement('div')) => {
    const instance = ReactDOM.render(component, container)

    sweep(() => {
      ReactDOM.unmountComponentAtNode(container)
    })

    return drill(instance)
  }

  describe('#click', function() {
    it('triggers the onClick handler', function() {
      let clicked

      render(
        <Button onClick={() => { clicked = true } } />
      ).click()

      assert.ok(clicked)
    })
  })

  describe('#clickNative', function() {
    it('simulates a native click event', function() {
      let clicked, clickedInReact

      const reset = () => {
        clicked = false
        clickedInReact = false
      }

      const attachNativeListener = node => {
        if (!node) {
          return
        }

        ReactDOM.findDOMNode(node).addEventListener('click', () => {
          clicked = true
        })
      }

      const scope = render(<Button
        ref={attachNativeListener}
        onClick={() => { clickedInReact = true }}
      />)

      scope.click()

      assert.notOk(clicked)
      assert.ok(clickedInReact)

      reset()

      scope.clickNative()

      assert.ok(clicked, 'should have triggered native handler')
      assert.notOk(clickedInReact, "should not have triggered React's handler")
    })
  })

  describe('#change', function() {
    it('triggers the onChange handler', function() {
      let changed

      render(
        <input onChange={() => { changed = true } } />
      ).change()

      assert.ok(changed)
    })
  })

  describe('#focus', function() {
    it('triggers the onFocus handler', function() {
      let focused

      render(
        <textarea onFocus={() => { focused = true } } />
      ).focus()

      assert.ok(focused)
    })
  })

  describe('#blur', function() {
    it('triggers the onBlur handler', function() {
      let blurred

      render(
        <textarea onBlur={() => { blurred = true } } />
      ).blur()

      assert.ok(blurred)
    })
  })

  describe('#check', function() {
    it('checks an input[type="checkbox"]', function() {
      const scope = render(
        <div>
          <input type="checkbox" name="a" />
          <input type="checkbox" name="b" />
        </div>
      )

      scope
        .find('input', m.hasAttribute('name', 'a'))
          .check()

      assert.deepEqual(
        scope.findAll('input').nodes.reduce((map, x) => {
          map[x.name] = x.checked
          return map
        }, {}),
        {
          a: true,
          b: false
        }
      )
    })

    it('triggers the onChange handler', function() {
      let changed

      render(
        <input type="checkbox" onChange={() => { changed = true }} />
      ).check()

      assert.ok(changed)
    })
  })

  describe('#uncheck', function() {
    it('unchecks an input[type="checkbox"]', function() {
      const scope = render(
        <input type="checkbox"  name="a" />
      )

      assertChange({
        fn: () => scope.check(),
        of: () => scope.node.checked,
        from: false,
        to: true
      })

      assertChange({
        fn: () => scope.uncheck(),
        of: () => scope.node.checked,
        from: true,
        to: false
      })
    })

    it('triggers the onChange handler', function() {
      let changed

      render(
        <input type="checkbox" onChange={() => { changed = true }} />
      ).uncheck()

      assert.ok(changed)
    })
  })

  describe('#fillIn', function() {
    it('fills in the "value" property of the node', function() {
      const scope = render(
        <input type="text" />
      )

      scope.fillIn('foo')

      assert.equal(scope.node.value, 'foo')
    })

    it('triggers the onChange handler', function() {
      let changed

      render(
        <input type="text" onChange={() => { changed = true }} />
      ).fillIn('foo')

      assert.ok(changed)
    })

    it('triggers the onInput handler', function() {
      let triggered

      render(
        <input type="text" onInput={() => { triggered = true }} />
      ).fillIn('foo')

      assert.ok(triggered)
    })
  })

  describe('#keyPress', function() {
    it('triggers the onKeyPress handler', function() {
      let triggered

      render(
        <input type="text" onKeyPress={() => { triggered = true }} />
      ).keyPress('K'.charCodeAt(0))

      assert.ok(triggered)
    })
  })

  describe('#keyDown', function() {
    it('triggers the onKeyDown handler', function() {
      let triggered

      render(
        <input type="text" onKeyDown={() => { triggered = true }} />
      ).keyDown('K'.charCodeAt(0))

      assert.ok(triggered)
    })
  })

  describe('#keyUp', function() {
    it('triggers the onKeyUp handler', function() {
      let triggered

      render(
        <input type="text" onKeyUp={() => { triggered = true }} />
      ).keyUp('K'.charCodeAt(0))

      assert.ok(triggered)
    })
  })

  if (canUseDataTransfer()) {
    describe('#paste (with DataTransfer)', function() {
      it('pastes text into the "value" property of the node', function() {
        let text

        const acceptText = e => {
          text = e.clipboardData.getData('text')
        }

        const scope = render(
          <textarea onPaste={acceptText} />
        )

        assertChange({
          fn: () => scope.paste('foo'),
          of: () => text,
          from: undefined,
          to: 'foo'
        })
      })

      it('does not modify the value of the dom node', function() {
        const scope = render(
          <textarea />
        )

        assertChange({
          fn: () => scope.paste('foo'),
          of: () => scope.node.value,
          from: '',
          to: ''
        })
      })

      it('triggers the onPaste handler', function() {
        let triggered

        render(
          <input type="text" onPaste={() => { triggered = true }} />
        ).paste('foo')

        assert.ok(triggered)
      })
    })
  }
  else {
    describe('#paste (without DataTransfer)', function() {
      it('modifies the "value" property of the node with the pasted text', function() {
        const scope = render(
          <textarea />
        )

        assertChange({
          fn: () => scope.paste('foo'),
          of: () => scope.node.value,
          from: '',
          to: 'foo'
        })
      })

      it('triggers the onPaste handler', function() {
        let triggered

        render(
          <input type="text" onPaste={() => { triggered = true }} />
        ).paste('foo')

        assert.ok(triggered)
      })
    })
  }

  describe('#select', function() {
    it('sets the value of <select /> to the selected <option />', function() {
      const scope = render(
        <select>
          <option value="a" />
          <option value="b" />
        </select>
      )

      assertChange({
        fn: () => scope.select('b'),
        in: [
          {
            of: () => (
              scope
                .find('option', m.hasAttribute('value', 'b'))
                  .node.selected
            ),
            from: false,
            to: true
          },
          {
            of: () => scope.node.value,
            from: 'a',
            to: 'b'
          }
        ]
      })
    })

    it('triggers the onChange handler', function() {
      let triggered

      render(
        <select onChange={() => { triggered = true }}>
          <option value="a" />
          <option value="b" />
        </select>
      ).select('b')

      assert.ok(triggered)
    })
  })

  describe('#typeIn', function() {
    it('types in 1 character at a time', function(done) {
      let callCount = 0;

      const calls = {
        0(e) {
          assert.equal(e.target.value, 'P')
        },

        1(e) {
          assert.equal(e.target.value, 'Pi')
          done()
        }
      }

      const scope = render(
        <input
          type="text"
          onChange={(e) => calls[String(callCount++)](e)}
        />
      )

      scope.typeIn('Pi')
    })

    it('works as expected', function() {
      class Editor extends React.Component {
        constructor() {
          super()

          this.state = { value: '' }
        }

        render() {
          return (
            <input
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
            />
          )
        }
      }

      const scope = render(<Editor />)

      assertChange({
        fn: () => scope.typeIn('مرحبا!'),
        of: () => scope.node.value,
        from: '',
        to: 'مرحبا!'
      })
    })
  })

  describe('.mouseEnter', function() {
    it('triggers the onMouseEnter handler', function() {
      let triggered

      render(
        <div onMouseEnter={() => { triggered = true }} />
      ).mouseEnter()

      assert.ok(triggered)
    })
  })

  describe('.mouseLeave', function() {
    it('triggers the onMouseLeave handler', function() {
      let triggered

      render(
        <div onMouseLeave={() => { triggered = true }} />
      ).mouseLeave()

      assert.ok(triggered)
    })
  })

  describe('.mouseDown', function() {
    it('triggers the onMouseDown handler', function() {
      let triggered

      render(
        <div onMouseDown={() => { triggered = true }} />
      ).mouseDown()

      assert.ok(triggered)
    })
  })

  describe('.mouseUp', function() {
    it('triggers the onMouseUp handler', function() {
      let triggered

      render(
        <div onMouseUp={() => { triggered = true }} />
      ).mouseUp()

      assert.ok(triggered)
    })
  })

  describe('.submit', function() {
    it('triggers the onSubmit handler', function() {
      let triggered

      render(
        <form onSubmit={() => { triggered = true }} />
      ).submit()

      assert.ok(triggered)
    })
  })

  describe('.dispatchNativeEvent', function() {
    it('triggers the onMouseUp handler', function() {
      let triggered = false

      const attachNativeListener = node => {
        if (!node) {
          return
        }

        ReactDOM.findDOMNode(node).addEventListener('click', () => {
          triggered = true
        })
      }

      const scope = render(
        <div ref={attachNativeListener} />
      )

      assertChange({
        fn: () => scope.dispatchNativeEvent('click'),
        of: () => triggered,
        from: false,
        to: true
      })
    })
  })
})
