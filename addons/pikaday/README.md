# Pikaday drill addon

A small addon for interfacing with the
[Pikaday](https://github.com/dbushell/Pikaday) date-picker library.

```javascript
import drill from 'react-drill'

drill(component)
  .warpToPikaday()
    .open()
    .chooseDay(18)
    .chooseMonth(7)
    .chooseYear(1967)
    .close()
```

## API

The API can be found [[here | ./index.js]] but you need to provide your own
implementation of `warpToPikaday` which has to do three things:

1. locate the component that has the Pikaday object
2. create a [[ref | Scope#ref]] to the Pikaday object called `pikaday`
3. [[morph | Scope#morph]] the scope into a [[PikadayScope]]

A sample implementation for a `DatePicker` component that has its pikaday set
on `this._pika` would be:

```javascript
import { PikadayScope } from 'react-drill/addons/pikaday'
import { registerExtension } from 'react-drill'

function warpToDatePicker() {
  return (
    this.find(DatePicker)
      .ref('pikaday', x => x._pika)
      .morph(PikadayScope)
  )
}

// expose it on the default Scope:
registerExtension('warpToDatePicker', warpToDatePicker)
```

## Dependencies

- pikaday
