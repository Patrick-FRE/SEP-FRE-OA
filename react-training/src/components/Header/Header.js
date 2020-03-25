import React from "react";
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
        </div>
      </header>
    );
  }
}
