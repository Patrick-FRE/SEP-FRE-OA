import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import variables from '../scss/_variables.scss'

const Header = () => {
    const [str, setStr] = useState('Todo Manager')
    const whiteArr = str.split('').map(el => 'white');

    const [colors, setColors] = useState(whiteArr);
    const setBg = () => {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
      }
      useEffect(() => {
        const interval = setInterval(() => {
            return setColors(str.split('').map(el => setBg()));
        }, 1000);
            return () => clearInterval(interval);
      }, []);
      
      const headLabel = str.split('').map((el, i) => {
            return (
                <p style = {{color: colors[i]}} key = {i}>{el}</p>
            )
      })
      
    
    return (
        <Head>
            {headLabel}
            {/*<button className = 'btn clear-btn'>Clear Todos</button>*/}
        </Head>
        )
}

export default Header;

const Head = styled.header`
    display: flex;
    background-color: ${variables.primary};
    justify-content: center;
    height: 6rem;
    width: 100%;
    align-items: center;
    color: white;

    .btn {
        height: 3rem;
        width: 10rem;
        color: white;
        background-color:${variables.tertiary};
        border-radius: 5px;
        font-size: 16px;
    }
    .btn:hover {
        background-color: ${variables.btnHover}; 
        border: 1px solid aqua;
        color: aqua;
    }
`