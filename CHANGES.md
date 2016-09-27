## 2.1.4

- Add support for options hash to keyUp, keyPress, and keyDown DOMHelpers

## 2.1.3

- Track `react` and `react-dom` as peer dependencies instead of dependencies.

## 2.1.2

- Fixed an issue where an undefined selector passed to `DOMSelectors.find` would throw an exception

## 2.1.0

- Added a react-blessed addon
- Scope can now be inherited and it will respect the custom constructor when 
  chaining
- It is now possible to inject a custom `findDOMNode` and `scryRenderedComponentsWithType` routines other than ReactDOM for non-DOM React environments.

## 2.0.0

- Now works with React 0.14
- added a `dispatchNativeEvent` DOM helper

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
