
// API CALL | MODEL
let state = {};
let _todoList = [];

Object.defineProperty(state, "todoList", {
    get() {
        return _todoList;
    },
    set(newTodo) {
        _todoList = newTodo;
        let tmplate = newTodo
            .map(
               todo => `<li>${todo}<button type="button" id="${todo}" class="btnDelete">Remove</button></li>` 
            ).join("");
        render(tmplate, todoListElement);
    }
});

// DOM | VIEW
const todoListElement = document.getElementById("list");

// CONTROLLER
function render(template, element) {
    element.innerHTML = template;
}

function setUpEvent() {
    let entryElement = document.getElementById("entryBox");
    entryElement.addEventListener("keyup", () => { //don't have to explicitly name event in parameter
        // console.log(entryElement.value);
        // console.log(event.key);
        if(event.keyCode === 13) {
            //event.preventDefault();
            //console.log(entryElement.value);
            if(entryElement.value != "") {
                let temp = state.todoList.concat([entryElement.value]);
                state.todoList = temp;
                entryElement.value = "";
            }
        }
    });
    
    let deleteElement = document.getElementById("list");
    deleteElement.addEventListener("click", () => {
        if (event.target.className === "btnDelete") {
          //console.log(event.target.id);
          state.todoList = state.todoList.filter(item => {
            if (item !== event.target.id) {
              return true;
            } else {
              return false;  
              //console.log("remove");
            }
          });
        }
      });
}

function init() {
    setUpEvent();
}

init();