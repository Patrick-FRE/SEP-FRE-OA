import React from "react";

import { updateUrl } from "./Route";

export class Link extends React.Component {
  constructor(props) {
    super(props);
    this.clickhandle = this.clickhandle.bind(this);
  }

  clickhandle(e) {
    console.log("click");
    e.preventDefault();
    updateUrl(this.props.to);
  }
  render() {
    const { to, children } = this.props;
    return (
      <a href={to} onClick={this.clickhandle}>
        {children}
      </a>
    );
  }
}
