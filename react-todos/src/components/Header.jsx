import React, { useState } from 'react';
import styled from 'styled-components';
import variables from '../scss/_variables.scss'

const Header = () => {

    return (
        <Head>
            <button className = 'btn clear-btn'>Clear Todos</button>
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