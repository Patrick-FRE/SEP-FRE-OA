import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <form onSubmit={this.props.submitHandler}>{this.props.render()}</form>
    );
  }
}

export default Login;
