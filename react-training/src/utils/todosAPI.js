const baseURL = "https://us-central1-todos-server.cloudfunctions.net/api";
const todosPath = "todos";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwIiwidXNlcm5hbWUiOiJ0ZXN0MCIsInBhc3N3b3JkIjoidGVzdDAiLCJyb2xlciI6Im1lbWJlciIsImlhdCI6MTU4NTU5NTQyNiwiZXhwIjoxNTg1ODk1NDI2fQ.VHSN5sL82FrxaWcCt80i88RELI-438UwZzlry-sS0QY";
const BearerToken = "Bearer " + token;
const getTodos = () => {
  const apiUrl = baseURL + "/" + todosPath;
  const method = "GET";
  return fetch(apiUrl, {
    method: method,
    headers: {
      Authorization: BearerToken,
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
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
  }).then(res => res.json());
};

export default {
  getTodos,
  addTodo,
  removeTodo
};
