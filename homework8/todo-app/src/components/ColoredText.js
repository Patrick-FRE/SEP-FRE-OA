import React, { Component } from "react";
import { getRandomColor } from "../util/getRandomColor";

class ColoredText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: getRandomColor()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        color: getRandomColor()
      });
    }, 1000);
  }
  render() {
    return <span style={{ color: this.state.color }}>{this.props.letter}</span>;
  }
}

export default ColoredText;
