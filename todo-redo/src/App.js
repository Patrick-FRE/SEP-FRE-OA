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

class D extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>this is D</div>;
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

class App extends React.Component {
  componentDidMount() {
    console.log("update");
    let node = ReactDOM.createPortal("span", document.getElementById("app"));
    console.log("node", node);
  }
  render() {
    return <C class="container" name="ccc" />;
  }
}

export default App;
