# React Drill

React Drill is a React testing library that facilitates interacting with a DOM
tree through an expressive API similar to [Capybara's](https://github.com/teamc
apybara/capybara/blob/2.17_stable/README.md#the-dsl). The library provides a
number of abstractions for locating particular UI elements using either React
component classes or DOM selectors and for interacting with them.

The name "drill" comes from the fact that the API allows you to "drill down" through a React virtual DOM tree to interact with elements in it.

## Motivation

- The means to easily express the _intent_ of an interaction instead of
  fiddling around with implementation details like how to trigger the `select`
  event on a combo box, or how to simulate typing into a text widget.

  Drill does this by providing a set of uniform APIs that can abstract this
  away:

      drill(component)
        .find(TextField)
          .typeIn('hello world')

- The possibility of not relying on CSS classes or DOM selectors to find
  elements to interact with. Instead, one can use the source React component
  class as a selector:

      drill(component)
        .find(Button, m.hasText('Save'))
          .click()

## Usage

To install the package you can get it from npm:

```shell
npm install --save-dev react-drill
```

It is recommended to go quickly over the [[concepts | README.md#concepts]]
before jumping into the API.

## Concepts

Drill's API is driven by four concepts: the scope object, selectors, matchers,
and actions. This section will walk you through them.

### Scope

A [[scope | Scope]] is an object that represents the current React component
and a set of DOM nodes that you're able to interact with. When you [[drill]]
into a tree, you get a scope back.

The scope APIs are chainable in that most of them return another scope back for
you, unless they're [[actions | README.md#actions]] then they'd return the same
scope back.

    drill(component)    // => Scope.<component, [findDOMNode(component)]>
      .find(Menu)       // => Scope.<Menu, [findDOMNode(Menu)]>
        .find('button') // => Scope.<Menu, [HTMLElement.<button>]>
          .click()      // => Scope.<Menu, [HTMLElement.<button>]>
          .blur()       // => Scope.<Menu, [HTMLElement.<button>]>

**Next**: we can create scopes but how do we refine them to represent other
components and DOM nodes down the tree?

### Selectors

A selector is a function that locates React components _or_ DOM nodes inside
the current scope matching criteria you specify. The most common selectors are
[[Scope#find]] and [[Scope#findAll]].

    drill(component)
      .find(Menu)        // find is a selector
        .findAll(Button) // findAll is also a selector

**Next:** we're now able to create scopes and select elements, but not
particular ones. Can we refine our selection further?

### Matchers

A [[matcher | Matcher]] is a predicate function that allows you to refine your
selection to locate a most particular element in your scope. All [[selectors |
./README.md#selectors]] accept a matcher.

    drill(component)
      .find(Button, m.hasText('Save')) // hasText is a matcher

A list of [[common matchers | Matchers]] is available for your convenience and
you can [[build your own | examples/custom-matchers.md]] too.

**Next:** with the ability to locate particular elements using selectors and
matchers, we now need a way to interact with them.

### Actions

An action is a function that takes a scope and interacts with its DOM node(s)
or its component, such as by clicking, blurring, or typing in.

The [[pre-made actions | Actions]] are available directly on the stock
[[Scope]] object.

    drill(component)
      .click() // click is an action

Just like with matchers, you can [[define your own actions | examples/custom-
actions.md]] too.

## Where to go from here

See [[drill]] for creating a scope and then the [[Scope]] itself for more
possibilities. Or if you'd prefer to see examples first, browse from the
sidebar to the left.

## FAQ

### Drill isn't working with stateless components!

It cannot since they have no instance to represent them and the [[scope]] needs
one otherwise it cannot tell what's a component and what's a (virtual) DOM
node.

You can not use this library if you're using stateless components exclusively.

### Can't find the "react test utils" package

If you're using a version of React lower than 15.5.4 then you need to inject
drill with the ReactTestUtils object which can be found from the following
files in different versions:

Version  | File
-------- | ----
> 15.5.4 | `react-dom/test-utils`
> 15.4.1 | `react-addons-test-utils` (NPM package)
< 15.4.1 | `react/lib/ReactTestUtils.js`

The following script shows how to provide drill with your own version of the
test utils package. **Make sure you call this before requiring the drill
itself!**

```javascript
require('react-drill/lib/dependencies/ReactTestUtils')(
  require('react-addons-test-utils')
)

// now you can use react-drill
const { drill } = require('react-drill')
```

### Can it be used without React or a DOM?

Maybe. See [[./examples/using-without-react.md]] or
[[./addons/react-blessed/README.md]].

### My tests are failing when drilling into an  `unknown` component

Drill will output the tag `<<unknown>>` if it can't find the displayName for a
component. If you are using ES6 classes for your React components, make sure
you're assigning a name rather than using anonymous classes. If you're using
`createReactClass()` from the `create-react-class` package, Drill should
automatically infer the component name, but you can always add a `displayName:
"MyComponent"` property to your createReactClass call.

The displayName is useful for debugging and tracing component hierarchies, so
your Drill experience will be easier if you keep the above in mind.

## License

MIT
