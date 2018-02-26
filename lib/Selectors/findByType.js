var DOM = require('../DOM');
var findComponentByType = require('./findComponentByType');

/**
 * @memberOf Selectors
 *
 * Find a DOM node that was rendered by a certain React component type.
 *
 * @param  {React.Component} subject
 *         The component instance that is expected to contain the target.
 *
 * @param  {React.Class} type
 *         The type of the target.
 *
 * @param  {Function} [cond]
 *         An optional [Matchers matcher]() function.
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
 *         const subject = ReactDOM.render(<FruitBasket {...props} />, document.body);
 *
 *         assert.ok(findByType(subject, ComboBoxItem, ':contains("Banana")'));
 *       });
 *     });
 */
function findByType(subject, type, cond) {
  var component = findComponentByType(subject, type, cond);

  if (component) {
    return DOM.findDOMNode(component);
  }
}

module.exports = findByType;
