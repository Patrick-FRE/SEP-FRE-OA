import React, { Fragment } from 'react';
import Header from './Header';
import TodosContainer from './TodosContainer';
//import variables from '../scss/_variables.scss'


const App = () => {

  return (
    <Fragment>
        <Header />
        <TodosContainer />
    </Fragment>
  )
}

export default App;
