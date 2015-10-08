const React = require('react');
const Button = React.createClass({
  render() {
    return (
      <button {...this.props} />
    );
  }
});

module.exports = Button;
