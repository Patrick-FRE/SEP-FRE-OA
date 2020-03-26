import React from 'react';

const LoginPage = (props) => {
    return (
        <React.Fragment>
            username:
            <input type = 'text'></input>
            password:
            <input type = 'password'></input>
            <button onClick = {(e) => {props.togglePage(e)}}>Login</button>
        </React.Fragment>
    )
}

export default LoginPage;