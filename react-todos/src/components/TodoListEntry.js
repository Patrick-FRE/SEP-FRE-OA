import React from 'react';


class TodoListEntry extends React.Component {
  state = {
    showButton: false
  }
  onRemoveClick = () => {
    console.log(this.props.removeTodo)
    this.props.removeTodo(this.props.id)
  }

  btnVisibilityToggle = () => {
    
    this.setState((preState, props) => {
      return {
        showButton: !preState.showButton
      }
    })
    console.log('toggle', this.state.showButton)
  }

  render() {
    return(
      <li className="todo-list-content__item" onMouseLeave={ this.btnVisibilityToggle } onMouseEnter={this.btnVisibilityToggle}>
        { this.props.todo } 
        <button onClick={ this.onRemoveClick }id={ this.props.id } className={`btn btn-remove ${this.state.showButton? ' show' : ''} `} >Remove </button>
      </li>
  
    )
  }
  
}

export default TodoListEntry;