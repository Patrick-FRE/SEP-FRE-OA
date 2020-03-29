import React, { Component } from "react";
import { getRandomColor } from "../../utility/getRandomColor";

class ColoredText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: getRandomColor() 
    };
  }

  render() {
    return <span style={{ color: getRandomColor() }}>{this.props.text}</span>;
  }

  componentDidMount() {
    this.actionTime = setInterval(() => {
      this.setState({ color: getRandomColor() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.actionTime) {
      clearInterval(this.actionTime);
    }
  }
}

export default ColoredText;