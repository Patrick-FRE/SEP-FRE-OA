import React from 'react';
import {getUserLogin} from '../../utility/api';
import { Field, reduxForm } from 'redux-form';

class Login extends React.Component{
  onSubmit = ({username, password}) => {
    getUserLogin(username, password)
    .then(data => {
      if(data.message === 'login Sucessful') {
        this.props.isUserLoggedIn(true)
      } else {
        this.props.isUserLoggedIn(false);
      }
    })
  }
  renderInput = ({input, label}) => {
    console.log(input, label)
    return (<>
    <label>{label}</label>
    <input {...input} />
    </>)
  }

  render(){
    // console.log(window.location.pathname);
    console.log(this.props)
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}action="https://us-central1-todos-server.cloudfunctions.net/api/user/login" method="post">
        <Field name="username" component={this.renderInput} label="Username"/>
        <Field name="password" component={this.renderInput} label="Password"/>
        <button>Submit</button>
      </form>
      )
    }
};

export default reduxForm({
  form:'login'
})(Login);