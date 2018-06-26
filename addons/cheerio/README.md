# Cheerio

This add-on replaces the jQuery backend in drill with a Cheerio-based one so
that selectors like `find('a')` and `findAll('a', m.hasText('foo')` and certain
actions that normally would be handled with jQuery are instead done with
Cheerio.

```javascript
const $ = require('cheerio')
const { drillIntoNode } = require('react-drill')
const drillCheerio = require('react-drill/addons/cheerio')

// activate the addon
drillCheerio.activate()

drillIntoNode($('div'))
  .find('a', m.hasText('Back'))
    .click()

// deactivate the addon if you need to swap back to the original backend
// (e.g. for other tests)
drillCheerio.deactivate()
```

## API extensions

- [[Cheerio.Matchers]]