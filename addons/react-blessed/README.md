# React Blessed drill addon

This add-on currently provides rather minimal support for drilling into
[blessed](https://github.com/chjj/blessed) nodes rendered using [react-
blessed](https://github.com/Yomguithereal/react-blessed).

So far, it is possible to assert on textual content of the nodes and reference
them by their underlying blessed type. For example, to assert that the screen
has rendered a `<log />` element containing a "Hello World!" message:

```javascript
import { drill, m } from 'react-drill/addons/react-blessed'

it('renders log messages', function() {
  const screen = blessed.screen();
  const component = ReactBlessed.render(<MyApp />, screen);

  drill(component).find('log', m.hasText('Hello World!'));
});
```

You can also utilize the drill for locating the blessed node then perform your
assertions on their properties. For example, to verify that a `progressbar`
widget has been filled to 25%:

    assert.equal(drill(component).find('progressbar').node.filled, 25)

## Usage

- make sure you require the `drill` and `m` from `react-drill/addons/react-blessed` and not just `react-drill`
- make sure you're using `ReactBlessed.render` and not `ReactDOM.render` obviously!!!

You can look at [goro](https://github.com/instructure/goro/blob/master/lib/__tests__/GoroUIComponents.test.js) which uses react-drill for testing its ReactBlessed UI.

## Matchers

These matches can be used with `find` and friends just like the [[regular drill
matchers | Matchers]]. They are exported as the `m` symbol:

    import { m } from 'react-drill/addons/react-blessed'

### .hasText

    function hasText(text: String): (blessed.Node): Boolean

Creates a matcher that will scrape the content of some blessed node and all
descendant nodes then matches the given string against them.

This also catches the `label` attribute so you can assert that a certain box with the "Failures" label is rendered as such:

    drill(component)
      .find('box', m.hasText('Failures'))

## Internal helpers

These functions are built for internal use but may be useful. They are
available on the `q` property of the main export:

    import { q } from 'react-drill/addons/react-blessed'

### `.getTextContent`

    function getTextContent(blessed.Node): String

Returns the textual content of a node **and all its descendants**. This is used
by the `hasText` matcher internally.

    getTextContent(
      drill(component)
        .find(log)
          .node
    ) // => "blah"

### `.findChildren`

    function findChildren(
      rootNode: blessed.Node,
      predicate: (blessed.Node): Boolean
    ): Array.<blessed.Node>

Returns all the rendered children and descendants of a given blessed node.

    findChildren(
      drill(component)
        .find(box, m.hasText('Controls'))
          .node
    ) // => [ <log />, <progressbar /> ]

## Gotchas

_Some_ blessed type factories actually return a different type altogether. I
hit this with `blessed.List()` which returns an instance of the type
`blessed.ScrollableBox`. So when you're drilling, you need to actually look for
`scrollablebox` and not `list`.

## TODO

1. The ability to drill using ReactBlessed components (like, components you define which render ReactBlessed nodes). Something like this:

```javascript
const Log = createReactClass({
  render() {
    return <log>{this.props.messages}</log>
  }
});

const App = createReactClass({
  render() {
    return <box><Log messages={['hi!']} /></box>
  }
});

it('renders a Log', function() {
  drill(component).find(Log).find('text', m.hasText('Hi!'))
});
```
