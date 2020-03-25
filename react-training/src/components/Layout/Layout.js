import React from "react";
import Header from "../Header/Header";

// render props in
export default class Layout extends React.Component {
  render() {
    let header = this.props.header ? this.props.header : null;

    return (
      <>
        {header}
        <main>{this.props.children}</main>
      </>
    );
  }
}
