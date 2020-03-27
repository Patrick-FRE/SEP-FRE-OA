import React, { Component } from "react";
import Item from "./Item";
import { BrowserRouter as Router } from "react-router-dom";
import Link from "../Link";

class Navbar extends Component {
  render() {
    let narBarItem = ["todo", "color", "login"];
    return (
      <Router>
        {narBarItem.map((item, idx) => {
          console.log(typeof item);
          return (
            <Link to={`/${item}`}>
              <Item
                key={idx}
                liClass="nav-list-item"
                wrapClass="nav-item-wrapper"
                render={() => item}
                clickHandler={() => this.props.navbarClickHandler(idx)}
              />
            </Link>
          );
        })}
      </Router>
    );
  }
}

export default Navbar;
