document
  .getElementById('fetchAPI')
  .addEventListener('click', fetchFromEndPoint);
document.getElementById('delete').addEventListener('click', close);
const table = document.getElementById('content-table');
const url = 'https://jsonplaceholder.typicode.com/todos/1';

// const fetchPromise = someUrl =>
//   new Promise((res, rej) => {
//     response = fetch('https://jsonplaceholder.typicode.com/todos/1');
//     if (response) {
//       res(console.log('Response!'));
//     } else {
//       rej(console.log('Reject!'));
//     }
//   });
// const getURL = new Promise((res,rej) =>{
//   if(fetch(url)){
//     console.log("promise fulfill");
//     return res.json()
//   }

// })
async function fetchFromEndPoint() {
  await fetch(url)
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
