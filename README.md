# react-drill

React Drill is a React testing library that facilitates interacting with a DOM
tree through an expressive API similar to [Capybara's](https://github.com/teamc
apybara/capybara/blob/2.17_stable/README.md#the-dsl). The library provides a
number of abstractions for locating particular UI elements using either React
component classes or DOM selectors and for interacting with them.

The name "drill" comes from the fact that the API allows you to "drill down" through a React virtual DOM tree to interact with elements in it.

## Motivation

- The means to easily express the _intent_ of an interaction instead of
  fiddling around with implementation details like how to trigger the `select`
  event on a combo box, or how to simulate typing into a text widget. Drill
  does this by providing a set of uniform APIs that can abstract this away.

      drill(component)
        .find(TextField)
          .typeIn('hello world')

- The possibility of not relying on CSS classes or DOM selectors to find
  elements to interact with. Instead, one can use the source React component
  class as a selector.

      drill(component)
        .find(Button, m.hasText('Save'))
          .click()

## Usage

JavaScript API docs can be found at http://amireh.github.io/react-drill/index.html.

## Concepts

### Scope

A [[scope | Scope]] is an object that represents the current React component
and a set of DOM nodes that you're able to interact with. When you [[drill]]
into a tree, you get a scope back.

The scope APIs are chainable in that most of them return another scope back for
you, unless they're [[actions | README.md#actions]] then they'd return the same
scope back.

    drill(component)    // => Scope.<component.type, nodes: [findDOMNode(component)]>
      .find(Menu)       // => Scope.<Menu, nodes: [findDOMNode(Menu)]>
        .find('button') // => Scope.<Menu, nodes: [HTMLElement.<button>]>
          .click()      // => Scope.<Menu, nodes: [HTMLElement.<button>]>
          .blur()       // => Scope.<Menu, nodes: [HTMLElement.<button>]>

**Next**: we can create scopes, which is cool, but how do we refine them to
represent other components and DOM nodes?

### Selectors

A selector is a function that locates React components _or_ DOM nodes inside
the current scope matching criteria you specify. The most common selector is
[[Scope#find]] but there are [[other | Selectors]] APIs available for more
eccentric use-cases.

    drill(component)
      .find(Menu)        // find is a selector
        .findAll(Button) // findAll is also a selector

**Next:** we're now able to create scopes and select elements, but not
particular ones. Can we refine our selection?

### Matchers

A [[matcher | Matcher]] is a predicate function that allows you to further
refine your selection to locate a most particular element for your scope. All
[[selectors | ./README.md#selectors]] accept a matcher.

    drill(component)
      .find(Button, m.hasText('Save')) // hasText is a matcher

A list of [[common matchers | Matchers]] is available for your convenience and
you can build your own too.

**Next:** with the ability to locate particular elements using selectors and
matchers, we now need a way to interact with them.

### Actions

An action is a function that takes a scope and interacts with its DOM node(s)
or its component, such as clicking, blurring, or typing.

The [[pre-made actions | Actions]] are available directly on the stock
[[Scope]] object.

    drill(component)
      .click() // click is an action

You can define your own actions too and expose them on the scope using
[[Scope.exposeAction]].

## Examples


## Installation

The thing works in any node.js environment or in the browser.

```bash
npm install react-drill
```

Browser build expects 3 things to be exposed on the global `window`:

- [window.React](https://facebook.github.io/react/downloads.html)
- [window.jQuery](https://jquery.com/download/) _(this dependency may be dropped in the future)_

## Where to go from here

See [[drill]] for the drilling API. Alternatively, you can use the helpers
directly without drilling in [[Selectors]] and [[Actions]].

## License

MIT
