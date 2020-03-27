import React from 'react';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e) {
    
  }
  render() {
    return (
      <form onClick={this.clickHandler}>
        <input type="text" placeholder="Username" value={this.state.username} />
        <input type="password" placeholder="Password" value={this.state.password} />
        <button>Login</button>
        <button>Sign Up</button>
      </form>
    );
  }
};
