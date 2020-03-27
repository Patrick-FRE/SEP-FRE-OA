import React from 'react';

const RouteArr = [];


const myRoute = (props) => {
    RouteArr.push(myRoute);
    console.log(window.location.pathname)
    if(window.location.pathname === props.path){
        return <props.component />
        // return React.createElement(component, null)
    }
    return null;

}

export default myRoute;