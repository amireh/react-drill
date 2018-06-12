const React = require('react')
const Pikaday = require('pikaday')
const { PikadayScope } = require('../')
const { findDOMNode } = require('react-dom')
const { assertChange, reactSuite } = require('test/helpers')

describe('pikaday', function() {
  class Screen extends React.Component {
    render() {
      return (
        <div>
          <DatePicker {...this.props} />
        </div>
      )
    }
  }

  class DatePicker extends React.Component {
    componentDidMount() {
      this.pikaday = new Pikaday({
        field: findDOMNode(this),
        position: 'bottom right',
        onSelect: this.props.onChange || Function.prototype,
        setDefaultDate: true,
      });
    }

    componentWillUnmount() {
      this.pikaday.destroy();
      this.pikaday = null;
    }

    render() {
      return (
        <input type="text" />
      )
    }
  }

  const rs = reactSuite(this, Screen, {})

  rs.autoRender()

  it('can warp to one', function() {
    const scope = rs.scope
      .find(DatePicker)
        .ref('pikaday', x => x.pikaday)
        .morph(PikadayScope)

    assert.ok(scope instanceof PikadayScope)
  })

  it('whines if "pikaday" ref was not found', function() {
    assert.throws(function() {
      rs.scope
        .find(DatePicker)
          .morph(PikadayScope)
    }, /Expected a "pikaday" ref to be assigned\!/)
  })

  it("whines if pikaday's field is not an INPUT", function() {
    const badPikaday = new Pikaday({
      field: document.createElement('div'),
    });

    assert.throws(function() {
      rs.scope
        .find(DatePicker)
          .ref('pikaday', () => badPikaday)
          .morph(PikadayScope)
    }, /Expected Pikaday field to be an \<input \/\>\!/)
  })

  describe('actions', function() {
    let scope

    beforeEach(() => {
      scope = rs.scope
        .find(DatePicker)
          .ref('pikaday', x => x.pikaday)
          .morph(PikadayScope)
    })

    describe('.open', function() {
      it('opens the date picker', function() {
        assertChange({
          fn: () => scope.open(),
          of: () => scope.isOpen(),
          from: false,
          to: true
        })
      })
    })

    describe('.open & .close', function() {
      it('closes the date picker', function() {
        scope.open()

        assertChange({
          fn: () => scope.close(),
          of: () => scope.isOpen(),
          from: true,
          to: false
        })
      })

      it('is a no-op if it is not open', function() {
        assertChange({
          fn: () => scope.close(),
          of: () => scope.isOpen(),
          from: false,
          to: false
        })
      })
    })

    describe('.writeDate', function() {
      it('adjusts the date', function() {
        scope.open()

        assertChange({
          fn: () => scope.writeDate('2001-07-18'),
          in: [
            {
              of: () => scope.queryDisplayDate(),
              from: '',
              to: '2001-07-18'
            },
            {
              of: () => scope.refs.pikaday.toString(),
              from: '',
              to: '2001-07-18'
            },
          ]
        })
      })
    })

    describe('.chooseYear, .chooseMonth, .chooseDay', function() {
      it('adjusts them', function() {
        scope.open();

        assertChange({
          fn: () => {
            scope.chooseYear(1948)
            scope.chooseMonth(7)
            scope.chooseDay(18)
          },
          of: () => scope.queryDisplayDate(),
          from: '',
          to: '1948-07-18'
        })
      })
    })
  })
})
