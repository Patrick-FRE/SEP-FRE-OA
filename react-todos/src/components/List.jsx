import React from 'react';
import styled from 'styled-components';

const List = ({ todos }) => {
    const render = todos.map((todo, index) => {
        return (
            <li key = {index}>
                {todo}
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
        justify-content: center;
        align-items: center;
        border-top: none;
    }
`