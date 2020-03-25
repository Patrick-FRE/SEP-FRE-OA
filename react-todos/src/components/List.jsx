import React from 'react';
import styled from 'styled-components';
import variables from '../scss/_variables.scss'

const List = ({ todos, deleteTodo }) => {
    const render = todos.map((todo, index) => {
        return (
            <li key = {index}>
                {todo}
                <button onClick = {(e) => deleteTodo(e,todo)}>remove</button>
            </li>
        )
    })
    return (
        <Ul>
            {render}
        </Ul>
    )
}

export default List;

const Ul = styled.ul`
    height: 40px;
    width: 100%;

    li {
        list-style-type: none;
        width: 100%;
        height: 100%;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: none;
        padding-left: 15px;
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
    li:hover {
        background-color: rgb(208,208,208);
    }
    button:hover {
        color: ${variables.secondary};
        background-color: rgba(24, 86, 151,0.3);
        border: 1px solid aqua;
    }
`