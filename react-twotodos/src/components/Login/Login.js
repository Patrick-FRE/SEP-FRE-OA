import React from 'react';
import {getUserLogin} from '../../utility/api'

class Login extends React.Component{
  state ={
    userName: '',
    password:''
  }

  handleUserName = (e) => {
    console.log('user:', e.target.value);
    this.setState({
      userName: e.target.value
    })
  }

  handleUserPW = (e) => {
    console.log('pw:', e.target.value);
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    getUserLogin(this.state.userName, this.state.password)
    .then(data => {
      if(data.message === 'login Sucessful') {
        this.props.isUserLoggedIn(true)
      } else {
        this.props.isUserLoggedIn(false);
      }
    })
  
  }


  render(){
    console.log(window.location.pathname);
    console.log(this.state.logIn)
    return (
  
        <form action="https://us-central1-todos-server.cloudfunctions.net/api/user/login" method="post">
          UserName:
          <input value={this.state.UserName} onChange={this.handleUserName} type="text" name="user-name" required/>
          Password:
          <input value={this.state.password} onChange={this.handleUserPW} type="password" name="password" required/>
          <button className="form-submit" onClick={this.handleSubmit}>Submit</button>
    
      </form>

  
    )
    }
};

export default Login;