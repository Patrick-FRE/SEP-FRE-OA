let state = {};
let _todoList = [];
let _completeList = [];
let todoTemplet = document.getElementById("left-listevent");
let completeTemplet = document.getElementById("right-listevent");

Object.defineProperty(state, "todoList", {
  get() {
    return _todoList;
  },
  set(newTodo) {
    _todoList = newTodo;
    let tmp = newTodo
      .map(
        todo =>
          `<li class="list-item">
            ${todo}
            <button id="${todo}" class="delete-btn">Delete</button>
            <button id="${todo}" class="complete-btn">Complete</button>
          </li>`
      )
      .join("");
    render(tmp, todoTemplet);
  }
});
Object.defineProperty(state, "completeList", {
  get() {
    return _completeList;
  },
  set(newComplete) {
    _completeList = newComplete;
    let tmp = newComplete
      .map(
        comp =>
          `<li class="list-item">
            ${comp}
            <button>Remove</button>
          </li>`
      )
      .join("");
    render(tmp, completeTemplet);
  }
});

function render(tmp, element) {
  element.innerHTML = tmp;
}

function setUpEvent() {
  let inputElement = document.getElementById("inputevent");
  inputElement.addEventListener("keyup", event => {
    if (event.keyCode === 13 && inputElement.value) {
      if (!_todoList.includes(inputElement.value))
        state.todoList = [inputElement.value, ...state.todoList];
      inputElement.value = "";
    }
  });

  todoTemplet.addEventListener("click", () => {
    if (event.target.className === "delete-btn") {
      console.log(event.target.parentElement);
      state.todoList = state.todoList.filter(ele => ele != event.target.id);
    }
    if (event.target.className === "complete-btn") {
      let closesElement = event.target.closest("li");
      let tar = closesElement.childNodes[0].wholeText;
      state.completeList = [tar, ...state.completeList];
      state.todoList = state.todoList.filter(ele => ele != event.target.id);
    }
  });
}

function init() {
  setUpEvent();
}
init();
