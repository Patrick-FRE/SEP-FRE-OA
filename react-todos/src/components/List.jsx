import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import variables from '../scss/_variables.scss'
import { getRandomRbg } from '../utils';


const List = (props) => {
    // const [colors, setColors] = useState([]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         return setColors(todos.map(el => getRandomRbg()))
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [todos]);


    // const headLabel = todos.map((el, i) => {
    //     return (
    //     <span key = {i} style = {{color: colors[i]}}>{i+1}. {el}</span>
    //     )
    // })
    return (
        <Ul>
            {props.children}
        </Ul>
    )
}

export default List;

const Ul = styled.ul`
    height: 40px;
    width: 100%;
`