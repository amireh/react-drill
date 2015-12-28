const React = require('react');

const Link = class Link extends React.Component {
  render() {
    return (
      <a {...this.props}>{this.props.children}</a>
    );
  }
};

module.exports = Link;
