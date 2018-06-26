# Upgrade guide

## Version 2 to 3

The React 16 upgrade brings a few breaking changes.
See the changelog for potential breaks and their fixes.

There has been a bunch of renames for clarity. Most of these changes are
straight-forward.

---

The `Scope.registerHTMLElementMethod` has been renamed to
[[drill.registerAction]].

If you were registering custom actions using that hook, you should rename it.

    // version 2:
    import Scope from 'react-drill/lib/Scope'
    Scope.registerHTMLElementMethod(function customClick() { ... })

    // version 3:
    import drill from 'react-drill'
    drill.registerAction(function customClick() { ... })

---

The `DOMHelpers` export has been renamed to `Actions`. If you were using them
directly and not through the Scope API, you should rename your references.

    // version 2:
    import { DOMHelpers } from 'react-drill'

    // version 3:
    import { Actions } from 'react-drill'

---

The `DOMSelectors` export has been renamed to `Selectors`. If you were using
them directly and not through the Scope API, you should rename your references.

    // version 2:
    import { DOMSelectors } from 'react-drill'

    // version 3:
    import { Selectors } from 'react-drill'
