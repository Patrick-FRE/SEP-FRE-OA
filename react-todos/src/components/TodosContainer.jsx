import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import List from './List';

const TodosContainer = () => {
    const [text, setText] = useState('');
    const [todos, setTodo] = useState([]);

    const handleChange = (e) => {
        e.preventDefault()
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo([...todos, text]);
        setText('');
    }

    const deleteTodo = (e, item) => {
        e.preventDefault();
        setTodo(todos.filter(el => el !==item));
    }
    return (
        <Fragment>
            <Section>
                <div className='todos-container'>
                    <header className='todos-label'>
                        <div className='header-item'>Today</div>
                        <div className='header-item'>
                            <form type='submit' 
                                  className = 'header-item'
                                  onSubmit = {handleSubmit}>
                                <input type='text' 
                                       placeholder='add todo...'
                                       onChange = {e=>handleChange(e)}
                                       value = {text}>
                                </input>
                            </form>
                        </div>
                    </header>
                    <List todos = {todos} deleteTodo = {deleteTodo}/>
                </div>
            </Section>

        </Fragment>
    )
}

export default TodosContainer;

const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 2rem;

    .todos-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
        height: 600px;
        margin-top: -1px;
        z-index: 1
    }
    .header-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 40px;
        border: 1px solid black;
    }
    input {
        height: 100%;
        text-align: center;
        width: 100%;
        font-size: 1.7rem;
        border: none;
    }
`