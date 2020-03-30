import React, { Component } from "react";
import "./Layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <nav className="nav-container">{this.props.header}</nav>
        {this.props.children}
      </>
    );
  }
}

export default Layout;
