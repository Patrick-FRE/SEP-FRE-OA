import React from 'react';
import { Route } from 'react-router-dom';
import App from './App.js'
//import Router from 'Route.js';

// class Link extends React.Component {
//     constructor(props) {
//         super(props);
       
//     }
//   clickhandler = (e) => {
//       e.preventDefault();
//       window.history.pushState({}, "", this.props.to);
//   }
//   render(){
//       const {to, children} = this.props;
//     return(
//         <>
//         <a href={to} onClick={this.clickhandler}>{children}</a>
//         <Route path="/app" exact component={ App }/>
//         </>
//     )
//   }
  
// }

// export default Link;

// import { Consumer } from './Router';
// export default function Link({path, ...props}) {
//     return (<Consumer>
//         {({action})=> <a {...props} onClick={()=>action.go(path)} />}
//     </Consumer>);
// }