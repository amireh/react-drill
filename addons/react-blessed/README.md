# react-drill <-> react-blessed addon

This add-on currently provides a rather minimal support for drilling into [blessed](https://github.com/chjj/blessed) nodes rendered using [react-blessed](https://github.com/Yomguithereal/react-blessed).

So far, we can assert on textual content of the nodes and reference them by their underlying blessed type. For example, to assert that the screen has rendered a `<log />` element containing a "Hello World!" message:

```javascript
const { drill, m } = require('react-drill/addons/react-blessed');

it('renders log messages', function() {
  const screen = blessed.screen();
  const component = ReactBlessed.render(<MyApp />, screen);

  drill(component).find('log', m.hasText('Hello World!'));
});
```

## Usage

- make sure you require the `drill` and `m` from `react-drill/addons/react-blessed` and not just `react-drill`
- make sure you're using `ReactBlessed.render` and not `ReactDOM.render` obviously!!!

You can look at [goro](https://github.com/instructure/goro/blob/master/lib/__tests__/GoroUIComponents.test.js) which uses react-drill for testing its ReactBlessed UI.

## Matchers

These matches can be used with `find` and friends just like the regular drill matchers. They are available on the `m` property of the main export:

    const { m } = require('react-drill/addons/react-blessed');

### `hasText(text: string) -> (blessed.Node -> bool)`

Creates a matcher that will scrape the content of some blessed node and all 
descendant nodes then matches the given string against them.

This also catches the `label` attribute so you can assert that a certain box with the "Failures" label is rendered as such:

    drill(component).find('box', m.hasText('Failures'))

## Queries

Some helpers for querying things against blessed nodes. These are available on the `q` property of the main export, i.e.:

    const { q } = require('react-drill/addons/react-blessed');

### `getTextContent(n: blessed.Node) -> string`

Returns the textual content of a node and all its descendants. This is used by 
the `hasText` matcher internally.

### `findChildren(n: blessed.Node) -> Array.<blessed.Node>`

Returns all the rendered children and descendants of a given blessed node.

## Gotchas

- _some_ blessed type factories actually return a different type altogether. I hit this with `blessed.List()` which returns an instance of the type `blessed.ScrollableBox`. So when you're drilling, you need to actually look for `scrollablebox` and not `list`. It's kinda lame, and *can* be worked around by monkey patching ReactBlessed internals but I didn't bother.

## TODO

1. The ability to drill using ReactBlessed components (like, components you define which render ReactBlessed nodes). Something like this:

```javascript
const Log = React.createClass({
  render() {
    return <log>{this.props.messages}</log>
  }
});

const App = React.createClass({
  render() {
    return <box><Log messages={['hi!']} /></box>
  }
});

it('renders a Log', function() {
  drill(component).find(Log).find('text', m.hasText('Hi!'))
});
```
