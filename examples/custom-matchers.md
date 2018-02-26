# Custom matchers

Let's assume we want to implement a matcher that filters components that have
exactly the props we ask for. Although a similar matcher already exists
([[Matchers.hasProp]]), it only allows testing for a single prop.

A sample implementation of such a matcher could be:

```javascript
function hasProps(desiredProps) {
  return function(node, index, props) {
    return (
      Object
        .keys(desiredProps)
        .every(key => props[key] === desiredProps[key])
    )
  }
}
```

We can [[register this matcher | drill.registerMatcher]] so that it's available
on the default `m` export of `react-drill` for convenience:

    import { registerMatcher, m } from 'react-drill'

    m.hasProps === hasProps // => false
    
    registerMatcher('hasProps', hasProps)

    m.hasProps === hasProps // => true