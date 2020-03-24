import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    counter: 0
  };

  render() {
    return <h1>{this.state.counter}</h1>;
  }

  componentDidMount() {
    this.state = { counter: 1 };
  }
}

export default App;
