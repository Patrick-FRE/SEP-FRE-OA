import React, { Component } from "react";
import Item from "./Item";
import Button from "./Button";
import ColoredText from "./ColoredText";
import { removeTodo } from "../util/todoAPI";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(id) {
    removeTodo(id);
    this.props.setUpTodos();
  }

  componentDidMount() {
    this.props.setUpTodos();
  }

  render() {
    return (
      <div className="todo-list-container">
        <ul className="todo-list">
          {this.props.todoList &&
            this.props.todoList.map(todo => (
              <Item
                liClass="todo-list-item"
                wrapClass="list-item-wrapper "
                key={todo.id}
                render={() => {
                  let coloredList = todo.content
                    .split(" ")
                    .map(word => (
                      <ColoredText
                        clsName="list-item-colored"
                        key={Math.random() * 100000000000}
                        letter={word}
                      />
                    ));
                  let uncoloredList = (
                    <p className="list-item-content">{todo.content}</p>
                  );
                  return (
                    <>
                      {this.props.showColored ? coloredList : uncoloredList}

                      <Button
                        title="delete"
                        clickHandler={() => this.clickHandler(todo.id)}
                      />
                    </>
                  );
                }}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
