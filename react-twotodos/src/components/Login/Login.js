import React from 'react';
import {getUserLogin} from '../../utility/api';
import { Field, reduxForm } from 'redux-form';
import { User } from '../../model/user';

class Login extends React.Component{
  onSubmit = ({username, password}) => {
    getUserLogin(username, password)
    .then(res => {
      if(res.data.verifyInfo){
        const { userId, username, exp, roler } = res.data.verifyInfo;
        this.props.updateUserInfo(new User(userId, username, exp, roler));
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
  form:'Login'
})(Login);