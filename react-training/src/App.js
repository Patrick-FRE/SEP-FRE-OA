import React from "react";
import ColoredText from "./components/ColoredText/ColoredText.js";

// class component vs function component
// state
// Declarative vs imperative
// call bind apply

function foo2() {}

function isEqualByValue(obj, obj2) {
  return JSON.stringify(obj) === JSON.stringify(obj2);
}

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Layout: constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Layout: GetDerivedStateFromProps");
    return null;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Layout: shouldComponentUpdate");

  //   console.log(
  //     nextProps,
  //     this.props,
  //     nextProps === this.props,
  //     nextProps == this.props
  //   );
  //   console.log(
  //     nextState,
  //     this.state,
  //     nextState === this.state,
  //     nextState == this.state
  //   );
  //   if (nextProps.type === this.props.type && nextState === this.state) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    console.log("Layout: render");
    return (
      <>
        <header>HEADER</header>
        <main>MAIN</main>
      </>
    );
    // return <h1 onClick={this.onClickHanlder}>{this.state.counter}</h1>;
  }

  getSnapshotBeforeUpdate() {
    console.log("Layout: getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount() {
    console.log("Layout: componentDidMount");
  }

  componentDidUpdate() {
    console.log("Layout: ComponentDidUpdate");
  }
}

function getData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Hello");
    }, 0);
  });
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.onClickHanlder = this.onClickHanlder.bind(this);
    console.log("App: constructor");
  }

  // shouldComponentUpdate() {
  //   console.log("App: shouldComponentUpdate");
  //   return true;
  // }

  static getDerivedStateFromProps(props, state) {
    console.log("App: GetDerivedStateFromProps");
    return null;
  }

  onClickHanlder() {
    console.log(this);
    console.log("click");
    this.setState({
      counter: this.state.counter + 1
    });

    // this.setState((preState, props) => {
    //   return {
    //     counter: preState.counter + 1
    //   };
    // });
  }

  render() {
    console.log("App: render");

    let typeName = "patrick";
    let typeValue = "two";
    let p = "Hello World";

    return (
      <>
        <Layout typeName={typeName} typeValue={typeValue}></Layout>
        <p>
          {p.split(" ").map((word, index) => {
            if (index === p.split(" ").length - 1) {
              return <ColoredText text={word} key={index}></ColoredText>;
            } else {
              return (
                <>
                  <ColoredText text={word} key={index}></ColoredText>
                  &nbsp;
                </>
              );
            }
          })}
        </p>
      </>
    );
    // return <h1 onClick={this.onClickHanlder}>{this.state.counter}</h1>;
  }

  getSnapshotBeforeUpdate() {
    console.log("App: getSnapshotBeforeUpdate");
    return null;
  }
  componentDidMount() {
    console.log("App: componentDidMount");
    // this.actionTime = setInterval(() => {
    //   console.log("update Counter");
    //   this.setState(preState => {
    //     return {
    //       counter: preState.counter + 1
    //     };
    //   });
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("App: ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("App: ComponentWillUnmount");
    if (this.actionTime) {
      clearInterval(this.actionTime);
    }
  }
}

export default App;
