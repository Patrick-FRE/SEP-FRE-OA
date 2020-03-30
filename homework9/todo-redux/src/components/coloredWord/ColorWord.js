import React, { Component } from "react";
import randomColor from "../../util/randomColor";

class ColorWord extends Component {
  constructor(props) {
    super(props);
    this.state = { color: randomColor() };
  }

  componentDidMount() {
    this.actionTime = setInterval(() => {
      this.setState({ color: randomColor() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.actionTime);
  }

  render() {
    return <span style={{ color: this.state.color }}>{this.props.word}</span>;
  }
}

export default ColorWord;
