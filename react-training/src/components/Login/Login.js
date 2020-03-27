import React from "react";
import { login } from "../../utils/authAPI";
import { User } from "../../model/user";
import { withRouter } from "react-router-dom";

const BtnTest = props => {
  console.log("BrnTest:", props);
  return (
    <button
      type="button"
      onClick={() => {
        props.history.push("/test");
      }}
    >
      Test
    </button>
  );
};
const WithRouteBtnTest = withRouter(BtnTest);

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangehandle = this.onChangehandle.bind(this);
    console.log("PROPSSSS,", props);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("submit");
    login(this.state.username, this.state.password).then(res => {
      const { userId, username, exp, roler } = res.data.verifyInfo;
      this.props.updateUserInfo(new User(userId, username, roler, exp));

      let { from } = this.props.location.state || { from: { pathname: "/" } };

      this.props.history.replace(from);
    });
  }

  onChangehandle(type, event) {
    switch (type) {
      case "username":
        this.setState({ username: event.target.value });
        console.log("username changed");
        break;
      case "password":
        this.setState({ password: event.target.value });
        break;
      default:
        break;
    }
  }

  render() {
    console.log("render");
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={e => this.onChangehandle("username", e)}
          value={this.state.username}
        ></input>
        <input
          type="text"
          placeholder="passowrd"
          onChange={e => this.onChangehandle("password", e)}
          value={this.state.password}
        ></input>
        <input type="submit" value="login" />
        <WithRouteBtnTest></WithRouteBtnTest>
      </form>
    );
  }
}

class ComponentA extends React.Component {
  render() {
    return "Component" + this.props.name;
  }
}

const getPatrick = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res({ name: "patrick" });
    }, 1000);
  });

const withPatrcik = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ""
      };
    }
    componentDidMount() {
      getPatrick().then(data => {
        this.setState({
          name: data.name
        });
      });
    }

    render() {
      return <WrappedComponent {...this.state}></WrappedComponent>;
    }
  };
};

export let Test = withPatrcik(ComponentA);
