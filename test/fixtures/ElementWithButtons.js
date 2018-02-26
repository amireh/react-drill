const React = require('react');
const Button = require('./Button');

const ElementWithButtons = React.createClass({
  render() {
    return (
      <div className="root-element">
        <div className="some-child">
          <Button type="submit" onClick={this.props.onSubmit} />
          <Button type="cancel" onClick={this.props.onCancel} />
        </div>
      </div>
    );
  }
});

module.exports = ElementWithButtons;