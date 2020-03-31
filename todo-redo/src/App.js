import React from "react";
import ReactDOM from "react-dom";
import "./app.css";

class C extends React.Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
    this.onClick = this.onClick.bind(this);
  }

  componentDidUpdate() {
    console.log("updated");
    this.divRef.current.style.backgroundColor = "yellow";
  }
  onClick() {
    this.forceUpdate();
  }

  componentDidMount() {
    this.divRef.current.style.backgroundColor = "red";
  }
  render() {
    return (
      <div
        ref={this.divRef}
        className={this.props.class}
        onClick={this.onClick}
      >
        {this.props.name}
      </div>
    );
  }
}

// const comp = React.createElement(
//   C,
//   {
//     className: "old",
//     name: "cj"
//   },
//   "old"
// );

// const compClone = React.cloneElement(
//   comp,
//   {
//     className: "new",
//     name: "new",
//     onClick: () => {
//       console.log("click clone");
//     },
//     onMouseOver: () => {
//       console.log("mouse over");
//     }
//   },
//   "new"
// );
// console.log("clone", compClone);

// console.log("react children", React.Children);
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

const ref1 = React.createRef();
const ref2 = React.createRef();

console.log(React.createRef);
console.log("ref1", ref1);
// You can now get a ref directly to the DOM button:

class D extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ref1.current.style.backgroundColor = "green";
    console.log("ref1 after", ref1);
  }

  render() {
    console.log("ref1 in render", ref1);
    return <FancyButton ref={ref1}>D</FancyButton>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    ref2.current.style.backgroundColor = "red";
  }
  render() {
    // return <C class="container" name="ccc" />;
    return (
      <>
        <FancyButton ref={ref2}>App</FancyButton>
        <D />
      </>
    );
  }
}

export default App;
