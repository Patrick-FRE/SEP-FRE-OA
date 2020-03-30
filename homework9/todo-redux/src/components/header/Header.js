import React, { Component } from "react";
import ColorWord from "../coloredWord/ColorWord";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let header = "TODO MANAGER";
    return (
      <>
        <header className="todo-header">
          {header.split(" ").map((word, idx) => (
            <ColorWord key={idx} word={word + " "} />
          ))}
        </header>
        <ul className="nav-link-container">
          <Link className="nav-link-item" to="/">
            <li>Todo</li>
          </Link>
          <Link className="nav-link-item" to="/color">
            <li>Colored todo</li>
          </Link>
          <Link to="/login" className="nav-link-item login">
            <li>Login</li>
          </Link>
        </ul>
      </>
    );
  }
}

export default Header;
