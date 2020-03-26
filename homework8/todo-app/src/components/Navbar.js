import React, { Component } from "react";
import Item from "./Item";

class Navbar extends Component {
  render() {
    let narBarItem = ["todo list", "colored list", "Login"];
    return (
      <>
        {narBarItem.map((item, idx) => (
          <Item
            key={idx}
            liClass="nav-list-item"
            wrapClass="nav-item-wrapper"
            render={() => item}
            clickHandler={() => this.props.navbarClickHandler(idx)}
          />
        ))}
      </>
    );
  }
}

export default Navbar;
