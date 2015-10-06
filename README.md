# react-drill

TL;DR - Handle DOM trees like the master you are. "Drill" down to the elements you need to reach and interact with them in a fun, expressive API.

---

The longer version:

`react-drill` provides a bunch of helpers for testing React components in an integration-style manner. The beautiful part is avoiding the reliance on using ugly, meaningless, and brittle CSS classes for locating things in the DOM tree, and instead, using the actual component types to drive our tests.

Code examples speak more than a thousand words:

## Example

This simple example shows how to reach a `<button />` rendered inside a component we're testing, and clicking it:

```javascript
const drill = require('react-drill');
const MyComponent = require('MyComponent');
const instance = React.render(<MyComponent />, document.body);

drill(instance)
  .find('button')
    .click()
;
```

But that's not what is really cool about `react-drill`, this is:

```javascript
const { drill, m } = require('react-drill');
const Button = React.createClass({
  render() {
    return <button {...this.props} />
  }
});

const RootComponent = React.createClass({
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

const component = React.render(<RootComponent />, document.body);

drill(component)
  .find(Button, m.hasText('Quack'))
    .click()
;
// => quack

drill(component)
  .find(Button, m.hasText('Purrr')) // => Error! No such Button component :)
    .click()
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
- [window.jQuery](https://jquery.com/download/)

## API

### Drilling

_TODO_

`findComponentByType(t: React.Class, p: (HTMLElement) -> bool) -> React.Component`

`findByType(t: React.Class, p: (HTMLElement) -> bool) -> HTMLElement`

`findBySelector(s: String, p: (HTMLElement) -> bool) -> HTMLElement`

`find(t: React.Class|String, p: (HTMLElement) -> bool) -> HTMLElement`

`findAll(s: String) -> Array<HTMLElement>`

### DOM helpers

_TODO_

### Matchers

_TODO_

## License

MIT