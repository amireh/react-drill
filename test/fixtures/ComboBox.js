const React = require('react');
const { arrayOf, shape, string } = require('prop-types');

class ComboBoxItem extends React.Component {
  render() {
    return (
      <li>{this.props.label}</li>
    );
  }
}

class ComboBox extends React.Component {
  propTypes: {
    items: arrayOf(shape({ id: string, label: string }))
  }

  render() {
    return (
      <ul>
        {this.props.items.map(this.renderItem)}
      </ul>
    );
  }

  renderItem(item) {
    return <ComboBoxItem key={item.id} {...item} />
  }
}

module.exports = ComboBox;
