# Custom actions

An [[action | DOMHelpers]] has a flexible signature:

    function(selector: String, [...params]): void

Primarily, it receives a DOM selector (or a DOM node) as the first argument
which indicates the element it should operate on. Any additional parameters
needed to perform the action can be specified afterwards. The return value is
insignificant.

You can utilize the selector [[DOMSelectors.find]] to convert the first
argument to a DOM node, and optimally ask the selector to assert the node
is valid.

A sample implementation to perform a `click` on an element would be:

```javascript
import { Scope, Selectors } from 'react-drill'
import { Simulate } from 'react-dom/test-utils'

function click(selector, options = { simulateNative = false }) {
  const node = Selectors.find(selector, { assert: true, action: "click" });

  if (options.simulateNative === true) {
    SimulateNative.click(node, option);
  }
  else {
    Simulate.click(node, option);
  }
}
```

Once you have your action defined, you may expose it on the Scope API using
[[Scope.registerAction]].

```javascript
Scope.registerAction(click)
```