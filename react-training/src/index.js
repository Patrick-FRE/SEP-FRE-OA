import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoApp from "./TodoApp";
import * as serviceWorker from "./serviceWorker";

// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isShow: true
//     };
//     this.onClickHandler = this.onClickHandler.bind(this);
//   }

//   onClickHandler() {
//     this.setState({
//       isShow: false
//     });
//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.onClickHandler}>Remove</button>
//         {this.state.isShow ? <App></App> : "Hide"}
//       </>
//     );
//   }
// }

ReactDOM.render(<TodoApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
