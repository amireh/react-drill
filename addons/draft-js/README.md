# Draft.js drill addon

This addon provides a custom [[scope | Scope]] for interacting with the
Draft.js rich-content editor.

The scope is defined in [[./index.js]] and can be accessed by [[warping |
Scope#warp]] to the editor component as shown below.

```javascript
import { drill } from 'react-drill'
import 'react-drill/addons/draft-js'

drill(component)
  .warpToRCE()  // => RCEScope
```

## Dependencies

- [chai](http://chaijs.com/)
- [draft.js](https://draftjs.org/) v0.10
- react-dom v15
