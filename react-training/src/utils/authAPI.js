// axios
const baseURL = "https://us-central1-todos-server.cloudfunctions.net/api";
const userPath = "user";
const loginPath = "login";
let isUser = false;

const login = (username, password) => {
  let endpoint = baseURL + "/" + userPath + "/" + loginPath;
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  }).then(res => {
    isUser = true;
    return res.json();
  });
};

const isAuthenticated = () => {
  return isUser;
};
export { login, isAuthenticated };
