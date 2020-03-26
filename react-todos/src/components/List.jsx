import React from 'react';
import styled from 'styled-components';


const List = (props) => {

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