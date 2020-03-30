import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import styles from './scss/application.scss';
import reducers from './reducers';


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// store.dispatch({ type: 'ADD_TODO', todo: 'read' })
// store.dispatch({ type: 'ADD_TODO', todo: 'bike' })

// const delayRemove = (todo) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch({type:'DELETE_TODO',todo})
//     },1000)
//   }
// }
// class ReduxApp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.forceUpdate = this.forceUpdate.bind(this)
//   }
//   componentDidMount() {
//     this.props.store.subscribe(() => {
//       return this.forceUpdate()
//     })
//   }
//   render() {
//     console.log('this.props.store', this.props.store)
//     const items = this.props.store.getState().todos.map((todo, i) => {
//       return <li key={i}>{todo}<span><button onClick={() => { this.props.store.dispatch(delayRemove(todo)) }}>remove</button></span></li>
//     })
//     return (
//       <div><ul>{items}</ul></div>
//     )

//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    console.log('Accepting the updated printMe module!');
  });
}