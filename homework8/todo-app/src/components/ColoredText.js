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
    this.actionTime = setInterval(() => {
      this.setState({
        color: getRandomColor()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.actionTime);
  }

  render() {
    return (
      <span className={this.props.clsName} style={{ color: this.state.color }}>
        {this.props.letter}
      </span>
    );
  }
}

export default ColoredText;
