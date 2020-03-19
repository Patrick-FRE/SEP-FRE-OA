const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzIiwidXNlcm5hbWUiOiJ0ZXN0MyIsInBhc3N3b3JkIjoidGVzdDMiLCJyb2xlciI6Im1lbWJlciIsImlhdCI6MTU4NDU1Mzg2MCwiZXhwIjoxNTg0ODUzODYwfQ.5sNbfNMCMc2ob_woYWQsAIwepTOz-z6kzc_wLT9JBxw";

function fetchData(url, token) {
  return fetch(url, {
    headers: new Headers({
      Authorization: `Bearer ${token}`
    })
  });
}

const View = (() => {
  const DOMString = {
    bodyElement: "body",
    inputElement: ".input-bar",
    todoListContent: ".todo-list-content",
    deleteButton: ".btn-delete"
  };

  const render = (template, element) => {
    element.innerHTML = template;
  };

  const generateTemplate = (content, id) => {
    return `<li class="todo-list-content__item" >${content}<span><button data-id=${id} class="btn-edit">Edit</button></span><span><button data-id=${id} class="btn-delete">delete</button></span></li>`;
  };

  return {
    DOMString,
    render,
    generateTemplate
  };
})();

const Model = (() => {
  class Todo {
    constructor(content) {
      this.todo = content;
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

  class State {
    constructor() {
      this._userInput = "";
      this._todoList = [];
    }

    get todoList() {
      return this._todoList;
    }

    set todoList(newValue) {
      this._todoList = newValue;

      let tmp = this._todoList
        .map(todo => {
          return view.generateTemplate(todo.content, todo.id);
        })
        .join("");
      view.render(tmp, todoListContent);
    }

    get userInput() {
      return this._userInput;
    }

    set userInput(newValue) {
      this._userInput = newValue;
      inputEle.value = this._userInput;
    }
  }

  let state = new State();

  const setupTodo = () => {
    fetchData(
      "https://us-central1-todos-server.cloudfunctions.net/api/todos",
      token
    )
      .then(res => res.json())
      .then(data => {
        state.todoList = data.data;
      });
  };

  const addTodo = newTodo => {
    // state.todoList = [...state.todoList, newTodo];
    fetch("https://us-central1-todos-server.cloudfunctions.net/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`
      },
      body: JSON.stringify(newTodo)
    }).then(res => setupTodo());
  };

  const removeTodo = id => {
    // state.todoList = state.todoList.filter(todo => todo.id !== id);
    fetch("https://us-central1-todos-server.cloudfunctions.net/api/todos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`
      },
      body: JSON.stringify({ todoId: id })
    }).then(res => setupTodo());
  };

  const editTodo = (id, newTitle) => {
    state.todoList = state.todoList.map(todo => {
      if (todo.id === id) {
        todo.title = newTitle;
        return todo;
      }
      return todo;
    });
  };

  const setUpEvent = () => {
    console.log("setUpEvent");

    let inputElement = document.querySelector(view.DOMString.inputElement);
    let todoListContainer = document.querySelector(
      view.DOMString.todoListContent
    );

    setupTodo();

    inputElement.addEventListener("keyup", event => {
      state.userInput = event.target.value;
      if (event.keyCode === 13) {
        let newTodo = new model.Todo(state.userInput);
        addTodo(newTodo);

        state.userInput = "";
      }
    });
    todoListContainer.addEventListener("click", e => {
      let todoId = e.target.dataset.id;
      console.log(todoId);
      if (e.target.className === "btn-delete") {
        removeTodo(todoId);
      } else if (e.target.className === "btn-edit") {
        editId = todoId;
        state.userInput = state.todoList.filter(
          todo => todo.id === todoId
        )[0].title;
      }
    });
  };

  const init = () => {
    setUpEvent();
  };

  return {
    init
  };
})(View, Model);

window.addEventListener("DOMContentLoaded", () => {
  Controller.init();
});
