const btnGet = document.querySelector(".get");
const btnClear = document.querySelector(".clear");
const todos = document.querySelector(".list");

function addTodosToDom(val) {
  const li = todos.appendChild(document.createElement("li"));
  li.innerHTML = val;
}

function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(responses => responses.json())
    .then(res => res.map(todo => addTodosToDom(todo.title)));
}

function clearTodos() {
  const li = document.querySelector(".list");
  while (li.hasChildNodes()) {
    li.removeChild(li.firstChild);
  }
}

btnGet.addEventListener("click", getTodos);
btnClear.addEventListener("click", clearTodos);
