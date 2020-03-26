import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import List from './List';
import variables from '../scss/_variables.scss'

const TodosContainer = (props) => {
    const [text, setText] = useState('');
    const [todos, setTodo] = useState([]);
    //const { todos, setTodo } = props;

    const handleChange = (e) => {
        e.preventDefault()
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length > 0) {
            setTodo([...todos, text]);
            setText('');
        }
    }

    const deleteTodo = (e, item) => {
        e.preventDefault();
        setTodo(todos.filter(el => el !== item));
    }
    const listItems = todos.map((todo, index) => {
        return (
            <Li key={index}>
                {todo}
                <button onClick={(e) => deleteTodo(e, todo)}>remove</button>
            </Li>
        )
    })
    return (
        <Section>
            <div className='todos-container'>
                <header className='todos-label'>
                    <div className='header-item'>Today</div>
                    <div className='header-item'>
                        <form type='submit'
                            className='header-item'
                            onSubmit={handleSubmit}>
                            <input type='text'
                                placeholder='add todo...'
                                onChange={e => handleChange(e)}
                                value={text}>
                            </input>
                        </form>
                    </div>
                </header>
                <List>
                    {listItems}
                </List>
            </div>
        </Section>
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
    Li:hover {
        background-color: rgb(208,208,208);
    }
    button {
        padding: 5px 10px;
        outline: none;
        cursor: pointer;
        border-radius: 5px;
        margin: 0 20px;
        font-size: 16px;
        color: ${variables.primary};
        background-color: white;
        z-index: 3;    
    }
    button:hover {
        color: ${variables.secondary};
        background-color: rgba(24, 86, 151,0.3);
        border: 1px solid aqua;
    }

`

const Li = styled.li`
    list-style-type: none;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: none;
    padding-left: 15px;

`