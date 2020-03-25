import React, { Component } from "react";
import ColoredText from "./ColoredText";

let word = "TODO MANAGER";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { word: word.split("") };
  }

  render() {
    console.log(this.state.word);
    return (
      <header className="todo-header">
        {this.state.word.map((w, idx) => (
          <ColoredText key={idx} letter={w} />
        ))}
      </header>
    );
  }
}

export default Header;
