const React = require('react');

class Button extends React.Component {
  render() {
    return (
      <button {...this.props} />
    );
  }
}

module.exports = Button;
