import React, { Component } from "react";

class Login extends Component {
  render() {
    return <form>{this.props.render()}</form>;
  }
}

export default Login;
