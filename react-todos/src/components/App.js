import React from 'react';
import Header from './Header'
import SearchBar from './SearchBar';
import TodoList from './TodoList';
import TodoListEntry from './TodoListEntry';


const App = () => {
  return(
    <div>
      <Header />
      <SearchBar />
      <TodoList />
      <TodoListEntry />
    </div>

  )
}

export default App;