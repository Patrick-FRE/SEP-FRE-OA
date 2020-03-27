import React from 'react';

// const getRandomColor = () => {
//   const r = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   return `rgb(${r},${b},${g})`;
// }

class TodoListEntry extends React.Component {
  state = {
    showButton: '',
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
      <li className="todo-list-content__item" style={{listStyleType:'none'}} onMouseLeave={ this.mouseLeaveHandler } onMouseEnter={this.mouseEnterHandler}>
        { this.props.todo } 
        {console.log(this.props)}
        <button id={ this.props.id } className={`btn btn-remove ${this.state.showButton === 'visible'? ' show' : ''} `} >Remove </button>
      </li>
  
    )
  }
  
}

export default TodoListEntry;

// import React from "react";

// const TodoListEntry = props => {
//   return(
  
//   <li id={props.id}>
//     {props.title}{" "}
//     <button
//       onClick={() => {
//         props.onClick(props.id);
//       }}
//     >
//       Remove
//     </button>
//   </li>
//   )
// }

// export default TodoListEntry;