const View = (() => {
  const DOMString = {
    inputElement: ".input-bar",
    todoListContent: ".todo-list-content",
    todoListContent_item: ".todo-list-content_item"
  };

  const render = (template, element) => {
    element.innerHTML = template;
  };

  return DOMString, render;
})();

const TodosAPI = (() => {
  const baseURL = "https://us-central1-todos-server.cloudfunctions.net/api";
  const todosPath = "todos";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3IiwidXNlcm5hbWUiOiJ0ZXN0NyIsInBhc3N3b3JkIjoidGVzdDciLCJyb2xlciI6Im1lbWJlciIsImlhdCI6MTU4NDU1NDM1OCwiZXhwIjoxNTg0ODU0MzU4fQ.eYPt4vNUZu6HQvPqAKaDu2ZI2fypy2iT0LGsJp-Ai0g";
  const BearerToken = "Bearer " + token;
  const getTodos = () => {
    const apiURL = baseURL + "/" + todosPath;
    const method = "GET";
    return fetch(apiURL, {
      method: method,
      headers: {
        Authorization: BearerToken,
        "Content-Type": "application/json"
      }
    });
  };
  const addTodo = title => {
    const apiUrl = baseURL + "/" + todosPath;
    const method = "POST";
    return fetch(apiUrl, {
      method: method,
      headers: {
        Authorization: BearerToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ todo: title })
    });
  };

  const removeTodo = id => {
    const apiUrl = baseURL + "/" + todosPath;
    const method = "DELETE";
    console.log(id);
    return fetch(apiUrl, {
      method: method,
      headers: {
        Authorization: BearerToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ todoId: id })
    });
  };
  return {
    getTodos,
    addTodo,
    removeTodo
  };
})();

const Model = (todoAPI => {
  class Todo {
    constructor(title, id) {
      this.title = title;
      this.id = id;
    }

    generateTemplate() {
      return ` <li class="todo-list-content_item" >${this.title} <button id=${this.id} class="btn btn-remove"  >Remove </button></li>`;
    }
  }

  const getTodos = () => {
    return todoAPI
      .getTodos()
      .then(data => data.json())
      .then(data => {
        return data.data;
      });
  };

  const addTodo = title => {
    return todoAPI.addTodo(title).then(data => data.json());
  };

  const removeTodo = id => {
    return todoAPI.removeTodo(id).then(data => data.json());
  };

  return {
    Todo,
    getTodos,
    addTodo,
    removeTodo
  };
})(TodosAPI);

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
        model.removeTodo(event.target.id).then(data => {
          console.log(data);
          if (data.errno === 0) {
            console.log("setup");
            setUpData();
          }
        });
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

  const updateUItodoList = (todoList, renderElement) => {
    let tmp = todoList
      .map(todo => {
        return todo.generateTemplate();
      })
      .join("");
    console.log("Tmp", tmp);
    view.render(tmp, renderElement);
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
      console.log("set TodoList");
      this._todoList = newValue;
      updateUItodoList(this._todoList, todoListContent);
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

  const setUpEvent = () => {
    console.log("setUpEvent");
    let inputElement = document.querySelector(view.DOMString.inputElement);
    inputElement.addEventListener("keyup", event => {
      state.userInput = event.target.value;
      if (event.keyCode === 13) {
        console.log("Enter");
        /// Add New Todo
        model.addTodo(state.userInput).then(data => {
          if (data.errno === 0) {
            setUpData();
          }
        });
        /// clean the UserInput
        state.userInput = "";
      }
    });
    setUpUIbtnRemoveClick();
  };
  const setUpData = () => {
    Model.getTodos().then(data => {
      console.log(data);
      state.todoList = data.map(todo => new model.Todo(todo.content, todo.id));
    });
  };

  const init = () => {
    console.log("app is working");
    setUpEvent();
    setUpData();
  };

  return {
    init
  };
})(View, Model);

window.addEventListener("DOMContentLoaded", () => {
  Controller.init();
});
