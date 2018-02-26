# Getting started

Let's assume we have a custom `<Button />` component:

```javascript
// @file components/Button.js
class Button extends React.Component {
  render() {
    return <button {...this.props} />
  }
}
```

And a `<Root />` component which renders a few `<Button />`s:

```javascript
// @file components/Root.js
class Root extends React.Component {
  render() {
    return (
      <div>
        <Button onClick={() => console.log('Quack')}>
          {'Quack'}
        </Button>

        <Button onClick={() => console.log('Pur')}>
          {'Pur'}
        </Button>
      </div>
    );
  }
}
```

Now we want to test that pushing each button rendered by `<Root />` yields the
proper results. The assertions themselves are omitted since they're out of the
scope of react-drill.

This is what our test would look like:

```javascript
// @file components/Root.test.js
import drill, { m } from 'react-drill'
import Root from '../Root'
import Button from '../Button'

const component = render(<Root />, document.createElement('div'))

it('quacks', function() {
  drill(component)
    .find(Button, m.hasText('Quack'))
      .click()
  // => quack
})

it('purs', function() {
  drill(component)
    .find(Button, m.hasText('XXX')) // => AssertionError: No such Button component
      .click()                      // <= this will never go through
})
```

Notice how we no longer needed to rely on CSS classes and DOM selectors to
locate elements.
