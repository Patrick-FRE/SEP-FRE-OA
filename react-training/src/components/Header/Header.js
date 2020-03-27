import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

/// CSS module
const Logo = () => {
  return <h1>ToDo-Manager</h1>;
};

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-list">
          <div className="header-list-item">
            <Logo></Logo>
          </div>
          <div className="header-list-item">
            <Link to="/todo">TODO</Link>
          </div>
          <div className="header-list-item">
            <Link to="/coloredtodo">COLOREDTODO</Link>
          </div>
          <div className="flex-grow"></div>
          <div className="header-list-item">
            <Link to="/login">LOGIN</Link>
          </div>
        </div>
      </header>
    );
  }
}
