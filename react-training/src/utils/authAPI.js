const baseURL = "https://us-central1-todos-server.cloudfunctions.net/api";
const userPath = "user";
const loginPath = "login";

const login = (username, password) => {
  let endpoint = baseUrl + "/" + userPath + "/" + loginPath;
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });
};
