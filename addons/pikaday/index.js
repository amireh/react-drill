const { drill, Scope } = require('react-drill');

/**
 * @extends Scope
 * @class
 *
 * A drilling scope for manipulating Pikaday components. You shouldn't
 * instantiate this directly; use [[warpToDatePicker]] instead.
 *
 * @example
 *
 *     drill(subject).warpToDatePicker()
 *       .chooseDay(15)
 *     ;
 */
function PikadayScope() {
  return Scope.apply(this, arguments);
}

PikadayScope.prototype = Object.create(Scope.prototype);

/**
 * Open the Pikaday dialog. You must do this if you want to choose the day!
 *
 * @return {PikadayScope}
 */
PikadayScope.prototype.open = function() {
  const datePickerScope = locateRootDatePickerScope.call(this);

  datePickerScope.find(':input').node.click();

  return this;
};

/**
 * Fill in a date not through the date picker but through the input box.
 *
 * @param {String} dateString
 *        Something like '3/24/1979' or '11-1-1999'.
 *
 * @return {PikadayScope}
 */
PikadayScope.prototype.writeDate = function(dateString) {
  const datePickerScope = locateRootDatePickerScope.call(this);

  datePickerScope.find(':input').fillIn(dateString).blur();

  return this;
};

/**
 * @return {String}
 *         The current date that is displayed to the user in the input control.
 */
PikadayScope.prototype.queryDisplayDate = function() {
  return locateRootDatePickerScope.call(this).find(':input').node.value;
};

/**
 * Select a year in the Pikaday picker.
 *
 * @param  {Number} year
 *
 * @return {PikadayScope}
 */
PikadayScope.prototype.chooseYear = function(year) {
  locateRootDatePickerScope.call(this).component
    ._pikaday
      .gotoYear(year)
  ;

  return this;
};

/**
 * Select a month in the Pikaday picker.
 *
 * @param  {Number} monthIndex
 *         Index of the month, e.g. 1-12.
 *
 * @return {PikadayScope}
 */
PikadayScope.prototype.chooseMonth = function(monthIndex) {
  locateRootDatePickerScope.call(this).component
    ._pikaday
      .gotoMonth(monthIndex - 1)
  ;

  return this;
};

/**
 * Select a day in the Pikaday picker.
 *
 * @param  {Number} dayIndex
 *         Index of the month day, 0-31.
 *
 * @return {PikadayScope}
 */
PikadayScope.prototype.chooseDay = function(dayIndex) {
  const buttonNode = this.find(`td[data-day="${dayIndex}"] .pika-button`).node;
  const event = new MouseEvent('mousedown', {
    bubbles: true
  });

  buttonNode.dispatchEvent(event);

  return this;
};

/**
 * @module warpToDatePicker
 *
 * Refine the scope so that its DOM node is that of the Pikaday's instance.
 *
 *     drill(subject)
 *       .find(ComponentThatHasPikaday)
 *         .warpToDatePicker()
 *           .open()
 *           .chooseDay(13)
 *
 * @param {String} propName
 *        The property on which the Pikaday instance can be found.
 *
 * @return {Scope}
 */
drill.registerExtension('warpToDatePicker', function warpToDatePicker(propName) {
  const parentScope = this;
  const { component, node } = this;

  return new PikadayScope(component, [
    component[propName].el,
    node
  ], [ parentScope, 'DatePicker (Pikaday)' ].join(' > '), parentScope);
});

function locateRootDatePickerScope() {
  let rootScope = null;
  let scope = this;

  do {
    if (
      scope.constructor === PikadayScope &&
      scope.parentScope &&
      scope.parentScope.constructor !== PikadayScope
    ) {
      rootScope = scope.parentScope;
      break;
    }

    scope = scope.parentScope;
  } while (!rootScope && scope.parentScope);

  return new Scope(
    rootScope.component,
    rootScope.nodes.slice(1),
    rootScope.path,
    rootScope.parentScope
  );
}