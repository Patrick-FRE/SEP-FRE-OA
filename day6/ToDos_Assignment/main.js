const url = "https://jsonplaceholder.typicode.com/todos";

const list = document.querySelector('.todo-list');
const showBtn = document.querySelector('.add-item');
const clearBtn = document.querySelector('.clear-item');

function getToDoList() {
  fetch(url)
  .then(res => res.json())
  .then(data => render(data))
  .catch(rej => {
    console.log('Error: ', rej);
  });
}

function clearToDoList() {
  list.innerHTML = '';
}

function render(data) {
  let item = '';
  data.forEach(todo => {
    const {userId, id, title, completed} = todo;
    item += `<li>
              <h4>ID: ${id}</h4>
              <h4>Title: ${title}</h4>
            </li>`;
  });
  list.innerHTML = item;
}


function clickHandler() {
  showBtn.addEventListener('click', getToDoList);
  
  clearBtn.addEventListener('click', clearToDoList);  
}


function init() {
  clickHandler();
}

init();