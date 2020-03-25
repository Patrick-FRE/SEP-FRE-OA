import React from 'react';


class TodoListEntry extends React.Component {
  state = {
    showButton: ''
  }
  onRemoveClick = () => {
    console.log(this.props.removeTodo)
    this.props.removeTodo(this.props.id)
  }

  mouseEnterHandler = () => {
    
    this.setState((preState, props) => {
      return {
        showButton: 'visible'
      }
    })
    console.log('toggle', this.state.showButton)
  }

  mouseLeaveHandler = () => {
    
    this.setState((preState, props) => {
      return {
        showButton: 'hide'
      }
    })
    console.log('toggle', this.state.showButton)
  }

  render() {
    return(
      <li className="todo-list-content__item" onMouseLeave={ this.mouseLeaveHandler } onMouseEnter={this.mouseEnterHandler}>
        { this.props.todo } 
        <button onClick={ this.onRemoveClick }id={ this.props.id } className={`btn btn-remove ${this.state.showButton === 'visible'? ' show' : ''} `} >Remove </button>
      </li>
  
    )
  }
  
}

export default TodoListEntry;