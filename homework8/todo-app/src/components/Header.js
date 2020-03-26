import React, { Component } from "react";
import ColoredText from "./ColoredText";
import Navbar from "./Navbar";

let word = "TODO MANAGER";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { word: word.split("") };
  }

  render() {
    return (
      <header className="todo-header">
        <div>
          {this.state.word.map((w, idx) => (
            <ColoredText key={idx} letter={w} />
          ))}
        </div>

        <Navbar navbarClickHandler={this.props.navbarClickHandler} />
      </header>
    );
  }
}

export default Header;
