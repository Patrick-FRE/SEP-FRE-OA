import React from 'react';
const TodoItem = (props) => {
return <li key = {props.key}>{props.title}</li>
}
export default TodoItem