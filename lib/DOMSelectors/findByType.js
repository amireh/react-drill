var React = require('react');
var findComponentByType = require('./findComponentByType');

/**
 * Find a DOM node that was rendered by a certain React component type.
 *
 * @param  {React.Component} subject
 *         The component instance that is expected to contain the target.
 *
 * @param  {React.Class} type
 *         The type of the target.
 *
 * @param  {Function|String} cond
 *         A jQuery selector string, or a function, in which case see the
 *         signature below.
 *
 * @param {HTMLElement} cond.node
 *        The DOM node to test.
 *
 * @return {Boolean} cond
 *         Whether this is the node you're looking for.
 *
 * @return {HTMLElement}
 *         The DOM node, if found.
 *
 * @example
 *
 *     const FruitBasket = require('components/FruitBasket');
 *     const ComboBoxItem = require('components/ComboBoxItem');
 *
 *     describe('Components::FruitBasket', function() {
 *
 *       it('should render a ComboBoxItem for every piece of fruit', function() {
 *         const props = {
 *           fruit: [ "Banana", "Apple", "Ackee" ]
 *         };
 *
 *         const subject = React.render(<FruitBasket {...props} />, document.body);
 *
 *         assert.ok(findByType(subject, ComboBoxItem, ':contains("Banana")'));
 *       });
 *     });
 */
function findByType(subject, type, cond) {
  var component = findComponentByType(subject, type, cond);

  if (component) {
    return React.findDOMNode(component);
  }
}

module.exports = findByType;