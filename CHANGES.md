## 1.0.4

- fixed an issue that was preventing `#find()` and other DOMSelectors from finding objects inside an `iframe.contentWindow`
- main export `drill` will now forward the second argument to `Scope`; the nodes

## 1.0.3

Internal changes:

- broke off the DOM selector routines from `DOMHelpers` into a separate module, `DOMSelectors`
- coverage for the selectors

## 1.0.2

- now exposing more DOMHelpers on the drilling API: `check`, `keyPress`, and `paste`
- new drilling API `has(t: String|React.Class, cond: Function) -> bool`
- fixed a bug that was preventing `find()` from properly matching a node in a selection
- a new matcher `hasAttribute(name: String, value: String) -> bool`

## 1.0.1

- added the `end()` method to the drilling API
- no longer tracking built files (`/dist`) in git, only in the npm package

## 1.0.0

- initial release
