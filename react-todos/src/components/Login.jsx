import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const LoginPage = (props) => {

    const { username, password, setUsername, setPassword } = props;

    const onNameChange = (e) => {
        setUsername(e.target.value);
    }
    const onPassChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            username:
            <input className='form-item'
                type='text'
                value={username}
                onChange={(e) => { onNameChange(e) }}></input>
            password:
            <input className='form-item'
                type='password'
                value={password}
                onChange={(e) => { onPassChange(e) }}>
            </input>

            <Link to='/todos' className='form-item'
                style={{ textDecoration: 'none', color: 'black' }}>
                <button
                    style={{ width: '100%' }}>
                    Login
              </button>
            </Link>
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