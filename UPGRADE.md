# Upgrade guide

## Version 2 to 3

There has been a bunch of renames for clarity. Most of these changes are
straight-forward.

---

The `Scope.registerHTMLElementMethod` has been renamed to
[[Scope.registerAction]].

If you were registering custom DOM helpers using that hook, you must rename it.

    // version 2:
    Scope.registerHTMLElementMethod(function customClick() { ... })

    // version 3:
    Scope.registerAction(function customClick() { ... })

---

The `DOMHelpers` export has been renamed to `Actions`. If you were using them
directly and not through the Scope API, you must rename your references.

    // version 2:
    import { DOMHelpers } from 'react-drill'

    // version 3:
    import { Actions } from 'react-drill'

---

The `DOMSelectors` export has been renamed to `Selectors`. If you were using
them directly and not through the Scope API, you must rename your references.

    // version 2:
    import { DOMSelectors } from 'react-drill'

    // version 3:
    import { Selectors } from 'react-drill'
