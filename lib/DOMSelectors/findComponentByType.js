var findComponentsByType = require('./findComponentsByType');

/**
 * @memberOf DOMSelectors
 *
 * Low-level helper for finding a rendered component instance of a certain type,
 * optionally matching some condition on its DOM node.
 *
 * See [.findByType]() for the parameter descriptions as they're the same.
 *
 * @param  {React.Component} subject
 * @param  {React.Class} type
 * @param  {Function} cond
 *
 * @return {React.Component}
 *         The rendered instance, if found.
 *
 * @example
 *
 * Asserting on an `<Icon />` rendered by a `<ComboBoxItem />`
 *
 *     const Subject = require('../SomeComponentThatRendersComboBoxItems');
 *     const ComboBoxItem = require('components/ComboBoxItem');
 *     const Icon = require('components/Icon');
 *
 *     it('should render a "banana" icon', function() {
 *       const subject = React.render(Subject, document.body);
 *
 *       // We locate the instance we want first
 *       const comboBoxItem = findComponentByType(
 *         subject, ComboBoxItem, ':contains("Option A")'
 *       );
 *
 *       // Then we can find things inside of it:
 *       const iconInsideComboBox = findByType(comboBoxItem, Icon);
 *
 *       // Now, we're assured our assertions are running on the <Icon /> we
 *       // want; no need to use :nth-of-type(), '.combo-box--item .icon', or
 *       // whatever.
 *       assert.equal(iconInsideComboBox.className, 'some-icon');
 *     });
 *
 */
function findComponentByType(subject, type, cond) {
  return findComponentsByType(subject, type, cond)[0];
}

module.exports = findComponentByType;