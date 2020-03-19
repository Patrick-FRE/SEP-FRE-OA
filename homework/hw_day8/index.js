const url = "https://us-central1-todos-server.cloudfunctions.net/api/todos";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyIiwidXNlcm5hbWUiOiJ0ZXN0MiIsInBhc3N3b3JkIjoidGVzdDIiLCJyb2xlciI6Im1lbWJlciIsImlhdCI6MTU4NDU1MzkxMiwiZXhwIjoxNTg0ODUzOTEyfQ.9ABhEKQ-IMANOw_5__wY6avjF5fVP3TMuMbwdwRrIEk";

const View = (() => {
  const DOMString = {
    inputElement: ".input-bar",
    todoListContent: ".todo-list-content",
    todoListContentItem: ".todo-list-content__item"
  };

  const render = (template, element) => {
    element.innerHTML = template;
  };

  return {
    DOMString,
    render
  };
})();

const Model = (() => {
  let id = 0;
  class Todo {
    constructor(title, todoId) {
      this.title = title;
      this.id = id;
      this.todoId = todoId;
      id++;
    }

    generateTemplate() {
      return ` <li class="todo-list-content__item" >${this.title} <button id=${this.todoId} class="btn btn-remove"  >Remove </button></li>`;
    }
  }

  return {
    Todo
  };
})();

const Controller = ((view, model) => {
  const inputEle = document.querySelector(view.DOMString.inputElement);
  const todoListContent = document.querySelector(
    view.DOMString.todoListContent
  );

  const setUpUIbtnRemoveClick = () => {
    const todoListContent = document.querySelector(
      view.DOMString.todoListContent
    );
    todoListContent.addEventListener("click", event => {
      if (event.target.className === "btn btn-remove") {
        removeTodo(event.target.id);
        updateUItodoList(todoListContent);
      }
    });
  };

  const setUpUIbtnRemoveToggle = () => {
    const todoListContentItem = document.querySelectorAll(
      view.DOMString.todoListContentItem
    );
    todoListContentItem.forEach(liElement => {
      liElement.addEventListener("mouseenter", mouseenterHanlder);

      liElement.addEventListener("mouseleave", mouseleaveHanlder);
    });
  };

  // event bubbling vs event capturing

  const mouseenterHanlder = event => {
    let btn = event.target.querySelector(".btn-remove");
    btn.style.visibility = "visible";
  };
  const mouseleaveHanlder = event => {
    let btn = event.target.querySelector(".btn-remove");
    btn.style.visibility = "hidden";
  };

  const updateUItodoList = (renderElement) => {
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Authorization": "bearer " + token,
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      let newTodoList = [];
      let tmp = responseData.data
      .map(obj => {
        let todo = new model.Todo(obj.content, obj.id);
        newTodoList.push(todo);
        return todo.generateTemplate();
      })
      .join("");
      state.todoList = newTodoList;
      view.render(tmp, renderElement);
    });

    //console.log("Tmp", tmp);
    //view.render(tmp, renderElement);
  };

  class State {
    constructor() {
      this._userInput = "";
      this._todoList = [];
    }

    get todoList() {
      return this._todoList;
    }

    set todoList(newValue) {
      //console.log("set TodoList");
      this._todoList = newValue;
      updateUItodoList(todoListContent);
      setUpUIbtnRemoveToggle();
    }

    get userInput() {
      console.log("get");
      return this._userInput;
    }

    set userInput(newValue) {
      console.log("set");
      this._userInput = newValue;
      inputEle.value = this._userInput;
    }
  }

  let state = new State();

  const addTodo = newTodo => {
    state.todoList = [...state.todoList, newTodo];
    let data = {
      "todo": newTodo.title
    };
    console.log(token);
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "bearer " + token,
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    });
  };

  const removeTodo = id => {
    state.todoList = state.todoList.filter(todo => todo.id != id);
    let data = {
      "todoId": id
    }
    fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Authorization": "bearer " + token,
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    });
  };

  const setUpEvent = () => {
    //console.log("setUpEvent");
    let inputElement = document.querySelector(view.DOMString.inputElement);
    inputElement.addEventListener("keyup", event => {
      state.userInput = event.target.value;
      if (event.keyCode === 13) {
        //console.log("Enter");
        /// Add New Todo
        let newTodo = new model.Todo(state.userInput, -1);
        //console.log(newTodo);
        addTodo(newTodo);
        updateUItodoList(view.DOMString.todoListContent);
        //console.log(state);
        /// clean the UserInput
        state.userInput = "";
      }
    });
    setUpUIbtnRemoveClick();
    // hover event

    // let todoListContent = document.querySelector(
    //   view.DOMString.todoListContent
    // );
    // console.log(todoListContent);

    // todoListContent.addEventListener("mouseenter", () => {
    //   console.log(event.target);
    // });
  };

  const init = () => {
    //console.log("app is working");
    setUpEvent();
  };

  return {
    init
  };
})(View, Model);

window.addEventListener("DOMContentLoaded", () => {
  Controller.init();
});
