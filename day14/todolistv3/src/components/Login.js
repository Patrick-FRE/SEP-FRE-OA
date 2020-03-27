import React from 'react';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  clickHandler(e) {
    e.preventDefault();
    return this.setState({ isLoggedIn: true });
  }
  signup() {
    return <span>Signup</span>;
  }
  render() {
    return (
      <form>
        <div className="login-inputs">
          <input 
            type="text" 
            placeholder="Username" 
            value={this.state.username}
            onChange={this.update('username')}     
            />
          <input 
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')} 
            />
        </div>
        <button onClick={this.clickHandler}>Login</button>
        <button onClick={this.signup}>Sign Up</button>
      </form>
    );
  }
};
