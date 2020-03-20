const View = (() => {
     const DOMElement = {
          inputBar: ".input-bar",
          todoListContent: ".todo-list-content",
          todoListContentItem: ".todo-list-content__item"
     }
     const render = (tmp, element) => element.innerHTML = tmp;
     return {
          DOMElement, render
     }
})();

const Model = (() => {
     const generateTemplate = (todo) => {
          return ` <li class="todo-list-content__item" >${todo.content} <button id=${todo.id} class="btn btn-remove"  >Remove </button></li>`;
     }
     return {
          generateTemplate
     };
})();


/////------TODOS API EVENT ---------------////
const todoApi = (() => {
     const baseURL = "https://us-central1-todos-server.cloudfunctions.net/api";
     let token = localStorage.getItem("token") || "no token yet";
     const todoListContent = document.querySelector(
          View.DOMElement.todoListContent
     );
     ///--------------LOGIN-------------///
     const loginAutomatically = async () => {
          try {
               console.log("Login working");
               let info = {
                    "username": "test1",
                    "password": "test1"
               }

               let response = await fetch(`${baseURL}/user/login`,
                    {
                         method: 'POST',
                         headers: {
                              'Content-Type': 'application/json',
                         },
                         body: JSON.stringify(info)
                    })
               let data = await response.json();
               localStorage.setItem("token", data.data.token);
          } catch (err) {
               console.log("Login error: ", err);
          }
     }
     ///----- FETCH TODOS---- //////
     const setupTodoList = async () => {
          try {
               let token = localStorage.getItem("token");
               let response = await fetch(`${baseURL}/todos`,
                    { method: 'GET', headers: { Authorization: `Token ${token}` } }
               )
               let todos = await response.json();
               updateUItodoList(todos.data, todoListContent)
          } catch (err) {
               console.log("Fetching Todos Error: ", err);
          }
     }
     ////----------Insert FETCHED TODOS into dom and render --------------////
     const updateUItodoList = (todoList, renderElement) => {
          let tmp = todoList
               .map(todo => {
                    return Model.generateTemplate(todo);
               })
               .join("");
          View.render(tmp, renderElement);
     };
     /// ---------- ADD TODO-----------/////
     const addTodo = async (content) => {
          try {
               let response = await fetch(`${baseURL}/todos`,
                    { method: 'POST', headers: { Authorization: `Token ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ todo: content }) }
               )
               setupTodoList();
          } catch (err) {
               console.log("Add todo req failed, Err: ", err);
          }
     }
     const removeTodo = async (id) => {
          try {
               let response = await fetch(`${baseURL}/todos`,
                    { method: 'DELETE', headers: { Authorization: `Token ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ todoId: id }) }
               )
               setupTodoList();
          } catch (err) {
               console.log("Remove todo req failed, Err: ", err);
          }
     }
     return {
          loginAutomatically,
          setupTodoList,
          addTodo,
          removeTodo
     }
})();

const Controller = ((view, model) => {
     const inputElement = document.querySelector(view.DOMElement.inputBar);
     const todoListContent = document.querySelector(
          view.DOMElement.todoListContent
     );
     const setUpEvent = () => {
          inputElement.addEventListener("keyup", event => {
               inputElement.value = event.target.value;
               if (event.key === "Enter") {
                    let newTodo = inputElement.value;
                    todoApi.addTodo(newTodo);
                    inputElement.value = "";
               }
          });
          setUpUIbtnRemoveClick();
     };
     const setUpUIbtnRemoveClick = () => {
          todoListContent.addEventListener("click", event => {
               if (event.target.className === "btn btn-remove") {
                    todoApi.removeTodo(event.target.id);
               }
          });
     };

     const init = async () => {
          setUpEvent();
          await todoApi.loginAutomatically(),
               todoApi.setupTodoList();
     };
     return {
          init,

     };
})(View, Model);

window.addEventListener("DOMContentLoaded", async () => {
     Controller.init();
});
