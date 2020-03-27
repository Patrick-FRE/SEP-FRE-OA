import React from "react";

export default class Link extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    event.preventDefault();
    window.history.pushState({}, "", this.props.to);
  }

  render() {
    return (
      <a href={this.props.to} onClick={this.clickHandler}>
        {this.props.children}
      </a>
    );
  }
}
