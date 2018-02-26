# Pikaday drill addon

```javascript
import { drill } from 'react-drill'
import drillForPikaday 'react-drill/addons/pikaday'
import DatePicker from 'components/DatePicker'

drill(component)
  .find(DatePicker)
    .warpToDatePicker('_pikaday')
      .open()
      .chooseDay(18)
      .chooseMonth(7)
      .writeDate()
```

The API can be found [[here | ./index.js]].

## Dependencies

- pikaday
