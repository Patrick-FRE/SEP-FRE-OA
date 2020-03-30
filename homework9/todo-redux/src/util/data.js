const baseURL = "https://us-central1-todos-server.cloudfunctions.net/api";
const todosPath = "todos";
const loginPath = "user/login";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzIiwidXNlcm5hbWUiOiJ0ZXN0MyIsInBhc3N3b3JkIjoidGVzdDMiLCJyb2xlciI6Im1lbWJlciIsImlhdCI6MTU4NTUwMDk4NSwiZXhwIjoxNTg1ODAwOTg1fQ.Zw_0N2OT7EhC-2b76ADVirT8BmQP7pZxeIWcaBgGQMU";
const BearerToken = "Bearer " + token;

export const login = (username, password) => {
  const apiUrl = baseURL + "/" + loginPath;
  const method = "POST";
  return fetch(apiUrl, {
    method,
    body: JSON.stringify({
      username,
      password
    })
  });
};

export const getTodos = () => {
  const apiUrl = baseURL + "/" + todosPath;
  const method = "GET";
  return fetch(apiUrl, {
    method: method,
    headers: {
      Authorization: BearerToken,
      "Content-Type": "application/json"
    }
  });
};

export const addTodo = newTodo => {
  const apiUrl = baseURL + "/" + todosPath;
  const method = "POST";
  return fetch(apiUrl, {
    method: method,
    headers: {
      Authorization: BearerToken,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ todo: newTodo })
  });
};

export const removeTodo = id => {
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
