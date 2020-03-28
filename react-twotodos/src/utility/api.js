const baseURL = "https://us-central1-todos-server.cloudfunctions.net/api"

export const addTodo = (input, todoList, id) => {
  let newTodo =  {title: input, id: id}
  id = id + 1;
  todoList = [...todoList, newTodo];
  
  return {id, todoList};  
}

export const removeTodo = (todoList, id) => {
  return todoList.filter(todo => todo.id !== id);
}

export const getUserLogin = (username, password) => {

  let userInfo = {
    "username": '',
    "password": ''
  }
}

