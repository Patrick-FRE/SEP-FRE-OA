import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
const LoginPage = (props) => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
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
    <Form>
            username:
            <input className='form-item'
                type='text'
                value={username}
                onChange={(e) => { onNameChange(e) }}></input>
            password:
            <input className='form-item'
                type='password'
                value={password}
                onChange={(e) => { onPassChange(e) }}
            ></input>
        <button className = 'form-item'><Link to ='/todos'>Login</Link></button>
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