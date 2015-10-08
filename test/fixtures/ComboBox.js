const React = require('react');
const { arrayOf, shape, string } = React.PropTypes;

const ComboBoxItem = React.createClass({
  render() {
    return (
      <li>{this.props.label}</li>
    );
  }
});

const ComboBox = React.createClass({
  statics: { Item: ComboBoxItem },
  propTypes: {
    items: arrayOf(shape({ id: string, label: string }))
  },

  render() {
    return (
      <ul>
        {this.props.items.map(this.renderItem)}
      </ul>
    );
  },

  renderItem(item) {
    return <ComboBoxItem key={item.id} {...item} />
  }
});

module.exports = ComboBox;
