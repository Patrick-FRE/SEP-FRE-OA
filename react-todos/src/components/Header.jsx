import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import variables from '../scss/_variables.scss'
//import { getRandomRbg } from '../utils';

const Header = ({children}) => {
    /*
    const [colors, setColors] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            return setColors(todos.map(el => getRandomRbg()))
        }, 1000);
        return () => clearInterval(interval);
    }, [todos]);


    const headLabel = todos.map((el, i) => {
        return (
        <span key = {i} style = {{color: colors[i]}}>{i+1}. {el}</span>
        )
    })
    */

    return (
        <Head>
            {children}
        </Head>
    )
    }

export default Header;

const Head = styled.header`
    display: flex;
    background-color: ${variables.primary};
    height: 6rem;
    width: 100%;
    justify-content: flex-end;
    align-items: center;


    ul {
        width: 100%
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    span {
        margin: 0px 5px;
    }
    span:hover {
        cursor: pointer
    }

`