const React = require('react');
const Button = require('./Button');

const ElementWithButtons = React.createClass({
  render() {
    return (
      <div className="root-element">
        <div className="some-child">
          <Button type="submit" />
          <Button type="cancel" />
        </div>
      </div>
    );
  }
});

module.exports = ElementWithButtons;