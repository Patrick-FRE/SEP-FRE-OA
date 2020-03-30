import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  // updateInput = (stateName, e) => {
  //   switch (stateName) {
  //     case 'username':
  //       this.setState({username: e.target.value});
  //       break;
  //     case 'password':
  //       this.setState({password: e.target.value});  
  //       break;
  //   }
  // }
  handleSubmit = (e) => {
    e.preventDefault();
    
  }
  render() {
    return (
      <form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>
        <input placeholder="Username" value={this.state.username} onChange={this.updateInput('username')}/>
        <input placeholder="Password" value={this.state.password} onChange={this.updateInput('password')}/>
        <input type="submit" value='Login'/>
        <input type="button" value='Signup'/>
      </form>
    );
  }
};
