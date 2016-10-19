# react-drill

> **NOTE**
>
> If you're using React 0.13 or older versions, you need to use the 1.x
> versions of this library. Versions 2+ will only support React 0.14+.

TL;DR - "Drill" down through a DOM tree to the element(s) you need to reach and interact with them in an expressive, integration-style API.

---

The longer version:

`react-drill` provides a bunch of helpers for testing React components in an integration-style manner. The beautiful part is avoiding the reliance on using ugly, meaningless, and brittle CSS classes for locating things in the DOM tree, and instead, using the actual component types to drive our tests.

## API docs

JavaScript API docs can be found at http://amireh.github.io/react-drill/index.html.

## Example

Let's assume we have a custom `<Button />` component:

```javascript
// @file components/Button.js
const Button = React.createClass({
  render() {
    return <button {...this.props} />
  }
});
```

And a `<Root />` component which renders a bunch of `<Button />` ones.

```javascript
// @file components/Root.js
const Root = React.createClass({
  render() {
    return (
      <div>
        <Button onClick={() => console.log('Quack')}>
          Quack
        </Button>

        <Button onClick={() => console.log('Pur')}>
          Pur
        </Button>
      </div>
    );
  }
});
```

Now we want to test that pushing each button rendered by `<Root />` yields the proper results. This is what our test would look like:

```javascript
// @file components/Root.test.js
const { drill, m } = require('react-drill');
const component = React.render(<Root />, document.body);

drill(component)
  .find(Button, m.hasText('Quack'))
    .click()
;
// => quack

drill(component)
  .find(Button, m.hasText('Purrr'))
  // => AssertionError: No such Button component
    .click()
    // ^ this will never go through
;
```

Notice how we no longer needed to rely on CSS classes, or DOM selectors, to locate elements. Instead, we utilize the _existing_ component types that we write anyway.

## Installation

The thing works in any node.js environment or in the browser.

```bash
npm install react-drill
```

Browser build expects 3 things to be exposed on the global `window`:

- [window.React](https://facebook.github.io/react/downloads.html)
- [window.React.addons.TestUtils](https://facebook.github.io/react/docs/test-utils.html)
- [window.jQuery](https://jquery.com/download/) _(this dependency may be dropped in the future)_

## Where to go from here

See [index.js]() for the drilling API. Alternatively, you can use the
helpers directly without drilling in [lib/DOMSelectors/index.js]() and
[lib/DOMHelpers.js]().

## License

MIT
