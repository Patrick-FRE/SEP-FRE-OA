import React, { Component } from "react";
import { connect } from "react-redux";
import {
  changeUsername,
  changePassword,
  loginUser
} from "../../actions/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.loginUser(this.props.username, this.props.password);
  }

  render() {
    console.log("usename", this.props.username);
    return (
      <form onSubmit={this.submitHandler}>
        <input
          value={this.props.username}
          name="username"
          placeholder="username"
          onChange={this.props.changeUsername}
        />
        <input
          value={this.props.password}
          name="password"
          placeholder="password"
          onChange={this.props.changePassword}
        />
        <input type="submit" value="login" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password
  };
};
export default connect(mapStateToProps, {
  changeUsername,
  changePassword,
  loginUser
})(Login);
