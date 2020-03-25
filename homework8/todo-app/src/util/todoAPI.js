const baseURL = "https://us-central1-todos-server.cloudfunctions.net/api";
const todosPath = "todos";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzIiwidXNlcm5hbWUiOiJ0ZXN0MyIsInBhc3N3b3JkIjoidGVzdDMiLCJyb2xlciI6Im1lbWJlciIsImlhdCI6MTU4NTA5NzM3NiwiZXhwIjoxNTg1Mzk3Mzc2fQ.2TxZTIQOllaQMwOaSNAFSpdNo16UpDoDx7oeZN7oLuE";
const BearerToken = "Bearer " + token;

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

export const addTodo = title => {
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
