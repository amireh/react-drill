# Teleporting

Sometimes the node or component we want to locate is outside of the current
virtual DOM tree. This is commonly the case when using "portals" in components
to render some _other_ component like a popup or a modal widget.

Drill provides a [[warp | Scope#warp]] routine to handle these cases. What we
do is locate the component that "owns" the portal, access the property that
contains that portal, then tell the scope to use it as its own component (or
DOM node if it's just an HTML element.)

    const modalScope = drill(component)
      .find(Modal)
        .warp(modalComponent => modalComponent.portal)

Now our scope is representing the component `modalComponent.portal` plus its
DOM node. We can interact with elements inside the _portal_ instead of the
dummy Modal that doesn't render anything:

    modalScope
      .find(Button, m.hasText('Cancel'))
        .click()

Additionally, we can make this easier for other programmers by implementing an
interface on the Scope's prototype to look for a `Modal` child and do the
warping:

    import { drill } from 'react-drill'

    drill.registerExtension('warpToModal', function() {
      return this.find(Modal).warp(({ portal }) => portal)
    })

Now, our first example can be rewritten as:

    drill(component)
      .warpToModal()
        .find(Button, m.hasText('Cancel'))
          .click()