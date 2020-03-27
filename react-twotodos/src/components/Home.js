import InputBar from './InputBar';
import TodoList from './TodoList';
import {Link }from 'react-router-dom';


class Home extends React.Component {
 
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todo: {},
  //     todoList: [{id: 1, title: 'Buy A Book'},{id: 2, title: 'Buy A Car'},{id: 3, title: 'Buy A Ball'}],
  //     id: 4,
  //     type: 'regular'
  //   }
  //   console.log('Home: constructor')
  // }
  render(){
    return(
      <>
        {/* <Header todos={this.state.todoList} getType={this.getType}/> */}
        
        <main className="todos-content">
          <section className="todo-list">
            <header className="todo-list-header">
              <div className="todo-list-header__item">
                <div className="todo-list__title">TODOS</div>
              </div>
              <InputBar />
            </header>
            <TodoList />
          </section>
        </main>  
        <Link to="/header" classname="header">Header</Link>
       
      </>


  
    );
  };
};

export default Home;