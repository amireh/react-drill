const { Scope, Actions } = require('react-drill');
const invariant = require('invariant');
const { dispatchNativeEvent } = Actions

/**
 * @extends Scope
 * @class
 *
 * A drilling scope for manipulating Pikaday objects.
 *
 * - Pikaday MUST be initialized with an `<input />` control for this to work.
 * - A [[ref | Scope#ref]] to the Pikaday object must be registered before
 *   attempting to morph into this scope. See [[the README | ./README.md]] if
 *   you haven't.
 */
function PikadayScope() {
  Scope.apply(this, arguments);

  invariant(this.refs.pikaday,
    `Expected a "pikaday" ref to be assigned!`
  )

  const field = selectField(this)

  invariant(field && field.tagName === 'INPUT',
    `Expected Pikaday field to be an <input />!`
  )

  this.nodes = [ this.refs.pikaday.el ].concat(this.nodes)
}

PikadayScope.prototype = Object.create(Scope.prototype);

/**
 * Open the Pikaday dialog. You must do this if you want to choose the day!
 *
 * @return {PikadayScope}
 */
PikadayScope.prototype.open = function() {
  Actions.clickNative(selectField(this))

  return this;
};

/**
 * Close an open Pikaday dialog.
 *
 * @return {PikadayScope}
 */
PikadayScope.prototype.close = function() {
  if (this.isOpen()) {
    Actions.clickNative(document.body)
  }

  return this;
};

/**
 * Fill in a date not through the date picker but through the input box.
 *
 * @param {String} dateString
 *        Something like "3/24/1979" or "11-1-1999".
 *
 * @return {PikadayScope}
 */
PikadayScope.prototype.writeDate = function(dateString) {
  const field = selectField(this)

  field.focus()
  field.value = dateString

  dispatchNativeEvent(field, 'change')

  field.blur()

  return this
};

/**
 * @return {String}
 *         The current date that is displayed to the user in the input control.
 */
PikadayScope.prototype.queryDisplayDate = function() {
  return selectField(this).value
};

/**
 * Select a year in the Pikaday picker.
 *
 * @param  {Number} year
 *
 * @return {PikadayScope}
 */
PikadayScope.prototype.chooseYear = function(year) {
  this.refs.pikaday.gotoYear(year);

  return this;
};

/**
 * Select a month in the Pikaday picker.
 *
 * @param  {Number} monthIndex
 *         Index of the month starting from 1 through 12.
 *
 * @return {PikadayScope}
 */
PikadayScope.prototype.chooseMonth = function(monthIndex) {
  this.refs.pikaday.gotoMonth(monthIndex - 1);

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

  return this
};

/**
 * Whether the picker is open (as reported by pikaday, not the UI.)
 *
 * @return {Boolean}
 */
PikadayScope.prototype.isOpen = function() {
  return this.refs.pikaday.isVisible();
};

function selectField(scope) {
  return scope.refs.pikaday._o.field
}

exports.PikadayScope = PikadayScope
