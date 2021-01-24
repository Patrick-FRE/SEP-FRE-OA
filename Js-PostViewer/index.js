console.log("js is working");
// API CALL    |||  MODEL
const baseURL = "https://jsonplaceholder.typicode.com";
const postsPath = "/posts";
function getPosts() {
  return fetch(baseURL + postsPath).then(res => res.json());
}

let state = {};
let _posts = [];
Object.defineProperty(state, "posts", {
  get() {
    console.log("get called");
    return _posts;
  },
  set(newValue) {
    console.log("set called");
    _posts = newValue;
    let tmp = newValue
      .map(
        post => `<tr>
  <td>${post.id}</td>
  <td>${post.title}</td>
  <td>${post.body}</td>
  <td><button id="${post.id}" class="btnDelete">DELETE</button></td>
</tr>`
      )
      .join("");
    render(tmp, postTableElement);
  }
});

// DOM  ||| VIEW
const postTableElement = document.getElementById("postTable");

// CONTROLLER

function render(template, element) {
  element.innerHTML = template;
}

function setUpEvent() {
  postTableElement.addEventListener("click", () => {
    if (event.target.className === "btnDelete") {
      console.log(event.target.id);
      state.posts = state.posts.filter(post => {
        if (post.id !== +event.target.id) {
          return true;
        } else {
          return false;
        }
      });
    }
  });
}

function init() {
  setUpEvent();
  // get Data
  getPosts().then(data => {
    console.log(data);
    state.posts = data;
  });
}

init();
