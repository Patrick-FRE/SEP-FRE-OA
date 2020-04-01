const baseURL = "https://us-central1-todos-server.cloudfunctions.net/api"
const userPath = "user";
const loginPath = "login";
const addTodo = (input, todoList, id) => {
  let newTodo =  {title: input, id: id}
  id = id + 1;
  todoList = [...todoList, newTodo];
  
  return {id, todoList};  
}

const removeTodo = (todoList, id) => {
  return todoList.filter(todo => todo.id !== id);
}

const getUserLogin = (username, password) => {
  let endpoint = baseURL + '/' + userPath + '/' + loginPath;
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password})
    }).then(res => {
      return res.json();
    })
}


export {
  getUserLogin, 
  addTodo,
  removeTodo
}
