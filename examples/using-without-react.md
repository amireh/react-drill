# Using without React

For the odd case when you're dealing with raw HTML strings and not app-layer
components, it's also possible to use the drill to work with the markup in a
more declarative manner -- (almost) just as if it's been rendered by a
component.

In this example we'll assume to be using [Cheerio](https://cheerio.js.org/) to
give us a structured version of the HTML that drill can work with. Also, we'll
assume to be in an environment that has no DOM (e.g. Node.js without jsdom or
anything.)

For this to work, we need to teach drill how to work with Cheerio nodes instead
of HTMLElement ones, which [[isn't as hard as it sounds |
../lib/DOM.js]] and luckily in the case of Cheerio, an [[addon |
../addons/cheerio/README.md]] exists already for doing just that.

```javascript
import { drillIntoNode } from 'react-drill'
import drillCheerio from 'react-drill/addons/cheerio'
import $ from 'cheerio'

const node = $(`
  <div>
    <a href="../index.html">Go back</a>
  </div>
`)

// swap the raw backend with a Cheerio one
drillCheerio.activate()

assert.ok(
  drillIntoNode(node)
    .find('a', m.hasAttribute('href', '../index.html'))
)
```
