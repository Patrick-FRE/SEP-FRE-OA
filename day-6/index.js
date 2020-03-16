function fetchTodos(url) {
     return new Promise((resolve, rej) => {
          let request = new XMLHttpRequest();
          request.onreadystatechange = function () {
               if (this.readyState == 4 && this.status == 200) {
                    resolve({
                         json: function () {
                              return JSON.parse(request.responseText)
                         }
                    });
               }
          };
          request.open("GET", url, true);
          request.send();
     });
}

const fetchingTodos = () => fetchTodos("https://jsonplaceholder.typicode.com/todos")
     .then(d => d.json())
     .then(data => renderData(data));

function renderData(data) {
     //somehow queyparameter limit not responding
     let newData = data.slice(0, 7)
     for (let todo of newData) {
          const todoUl = document.querySelector("#todo-list");
          const todoLi = document.createElement('li');
          const p = document.createElement('p');
          todoLi.dataset.id = todo.id
          p.innerHTML = todo.title;
          todoLi.append(p);
          todoUl.append(todoLi);
     }
}
function clearTodos() {
     const todoUl = document.querySelector("#todo-list").innerHTML = "";
}

document.getElementById("fetchTodos").onclick = fetchingTodos;
document.getElementById("clearTodos").onclick = clearTodos;