import React from 'react';
import styled from 'styled-components';
const LoginPage = (props) => {
    return (
        <Form type = 'submit' onSubmit = {(e)=>props.handleLogin(e)}>
            username:
            <input className = 'form-item' type = 'text'></input>
            password:
            <input className = 'form-item' type = 'password'></input>
            {props.children}
 
        </Form>
    )
}

export default LoginPage;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    .form-item {
        width: 300px;
    }
`