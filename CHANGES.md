# Release notes

## 3.0.0

**Improvements**

- The drilling scope can now select multiple components in addition to multiple
  DOM nodes.
- Added an official API to support [[warping | Scope#warp]]
- [[Scope]] is now an export of the package. It is no longer necessary to
  require it manually from `react-drill/lib/Scope.js`.
- Extensions to the scope's prototype (e.g. for warp routines) can now be made
  in a civil manner using the [[drill.registerExtension]] interface.
- Custom matchers can now be registered globally (on the `m` exported symbol)
  using the [[drill.registerMatcher]] interface.
- Custom actions can now be registered globally (on the Scope prototype) using
  the [[drill.registerAction]] interface.

**Breaking changes**

The following functions were **dropped** from the [[Scope]] object because they
were confusing and didn't add any value by themselves:

  * `Scope#findAllByType`
  * `Scope#findBySelector`
  * `Scope#findByType`
  * `Scope#findComponentByType`

In their place, one can now use [[Scope#find]] for locating a single element
and [[Scope#findAll]] for locating multiple ones. Both APIs accept either a DOM
query or a React class as a selector and the return type has been adjusted
accordingly.

**Potentially breaking changes (actions)**

The following changes are made with the intent of getting closer to simulating
exactly how React would trigger interactions when used in the browser by a real
user.

- [[Actions.click]] no longer accepts a `simulateNative` option. A new action
  has been introduced that dispatches a native browser event to use if needed:
  [[Actions.clickNative]].

- [[Actions.check]] no longer accepts an `isChecked` boolean option. If you
  want to uncheck a checkbox, use the new action [[Actions.uncheck]] instead.

- [[Actions.select]] no longer directly sets the `value` property of the
  `<select />` node.

- [[Actions.typeIn]] no longer accepts the `dontReplace` boolean option and no
  longer truncates the target's "value" property by default. If you are relying
  on this functionality, consider calling `.fillIn('')` on the scope first.

- [[Actions.paste]] no longer manually fills in the target's "value" property
  with the text. Instead, it creates a proper
  [ClipboardEvent](https://developer.mozilla.org/en-
  US/docs/Web/API/ClipboardEvent) with the textual content specified in the
  `clipboardEvent` properties data field (type `text`.) If you are relying on
  the previous behavior, consider calling `.fillIn(text)` on the scope first.

  Please note that this only works on Chrome right now since it's the only
  browser that currently supports instantiating `DataTransfer` objects. For
  other browsers we fall back to the previous behavior.

- [[Actions.typeIn]] no longer implicitly focuses the target nor does it fill
  in the target's "value" property with the text. Instead, it triggers events
  for each character as React would in the browser if the user were to type.
  The sequence of events is:

  * `keyDown`
  * `keyPress`
  * `beforeInput`
  * `input`
  * `change`
  * `keyUp`

- [[Actions.keyPress]], [[Actions.keyDown]], and [[Actions.keyUp]] no longer
  focus the target implicitly. If you are relying on this functionality,
  consider calling `.focus()` on the scope before the call to any of them.

**Deprecations**

The following symbols that were exported from the main package have been
renamed. The previous symbols are still around but will trigger a deprecation
notice and will be removed in a future release:

- `Scope.registerHTMLElementMethod` -> [[drill.registerAction]]
- `DOMHelpers` -> [[Actions]]
- `DOMSelectors` -> [[Selectors]]

Please consult the [[upgrade guide | ./UPGRADE.md#version-2-to-3]] for
guidance.

## 2.5.0

- matchers are now passed the index and the props of components
- new matcher [[Matchers.at]] for selecting a target (component or DOM node)
  via index
- new matcher [[Matchers.hasProp]] for querying a component prop

## 2.4.0

- Added new Scope API [[Scope#reload]] for re-binding the DOM node
- Added a new matcher: [[Matchers.hasProperty]]

## 2.3.0

- Now works with React 15.5.4
- Removed explicit dependency on the `react-addons-test-utils` package since it's now in 'react-dom'

## 2.2.1

- Fixed `#find` with HTMLElement or SVGElement in IE11

## 2.2.0

- Now works with React 15.4.1
- Added explicit dependency on the `react-addons-test-utils` package since it's no longer provided by `react`

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
