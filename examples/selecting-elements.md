# Selecting things

The complete reference for selecting and refining a selection is found under
the respective APIs: [[Selectors]] and [[Matchers]]. The examples here are
provided as support.

## Operating on a bunch of DOM nodes

Use [[Scope#findAll]]:

    drill(component)
      .findAll(Checkbox)
        .check()

## Selecting the Nth element

Use [[Matchers.at]]:

    const N = 3

    drill(component)
      .find(Button, m.at(N))

## Selecting a component with a specific prop

Use [[Matchers.hasProp]]:

    drill(component)
      .find(Link, m.hasProp('className', 'foo'))