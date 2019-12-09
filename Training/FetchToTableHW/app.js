//const pass = document.getElementById('fetchAPI');

document
  .getElementById('fetchAPI')
  .addEventListener('click', fetchFromEndPoint);
document.getElementById('delete').addEventListener('click', close);
const table = document.getElementById('content-table');

function fetchFromEndPoint() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      const content = `
      <tr>
          <th>id</th>
          <th>title</th>
          <th>body</th>
      </tr>
      `;
      let post = data;
      table.innerHTML += content;
      table.innerHTML += `
                     <tr>
                     <td>${post.id}</td>
                     <td>${post.title}</td>
                     <td>${post.body}</td>
                 </tr>
              `;
    })
    .catch(error => console.log(error));
}

function close() {
  table.innerHTML = '';
}
