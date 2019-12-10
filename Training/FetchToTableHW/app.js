console.log('App.js is loading');
const url = 'https://jsonplaceholder.typicode.com/todos/1';
const REALurl = 'https://jsonplaceholder.typicode.com/posts';
let posts = [];
//getDOM element
const getFetchElement = document.getElementById('fetchAPI');
const getTableElement = document.getElementById('content-table');
const getDeleteElement = document.getElementById('delete');

//fetch data
const fetchData = async () => {
  console.log('starting fetching from: ' + REALurl);
  let res = await fetch(REALurl);
  let data = await res.json();
  return data;
};

fetchData().then(data => {
  posts = data;
  console.log('sup fetching');
  console.log(posts);
});
// const getData = () => {
//   fetchData().then(data => {
//     posts = data;
//     console.log('Get DATA WAWA!!!');
//   });
// };

// getData();

const fetchHandler = () => {
  console.log('res is: ' + posts);
  render(getTableElement, generatePost(posts));
};

const removeButtonHandler = id => {
  console.log('This is removeButton Handler');
  removeAction(id);
  //update
  console.log('posts after delete debugger: ' + posts.length);
  render(getTableElement, generatePost(posts));
};

//render
const render = (rootElement, tmp) => {
  rootElement.innerHTML = tmp;
};

//TABLE RENDER
const generatePost = data => {
  let tmp = `<th>User ID</th>
  <th>Title</th>
  <th>Body</th>`;
  console.log('rerendering');
  data.forEach(post => {
    tmp += `<tr>
    <td>${post.userId}</td>
    <td>${post.title}</td>
    <td>${post.body}</td>
    <td><button class="removeBtn" id="post-${post.id}"
    type="button">Remove</button></td>
    </tr>`;
  });
  return tmp;
};

const deleteHandler = () => {
  console.log('Delete here');
  posts = [];
  render(getTableElement, generatePost(posts));
};

//Event Setup

const eventHandler = () => {
  getFetchElement.addEventListener('click', fetchHandler); //handle fetch
  getDeleteElement.addEventListener('click', deleteHandler); //handle delete all clear
  getTableElement.addEventListener('click', () => {
    if (event.target.className === 'removeBtn') {
      removeButtonHandler(event.target.id.substring(5));
      console.log('Remove event handler being triggered');
    }
  });
};

eventHandler();

//Delete Post
const removeAction = id => {
  console.log('This is removeAction!' + id);
  console.dir(id);
  posts = posts.filter(post => {
    if (post.id == id) {
      return false;
    } else {
      return true;
    }
  });
};
