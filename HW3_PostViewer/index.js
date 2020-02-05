function getData(url, callbackFn) {
  // implement
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      callbackFn(JSON.parse(this.responseText));
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}

getData('https://jsonplaceholder.typicode.com/posts', renderData);

// function nextAjax(data) {
//   let id = getBigestId(data);
//   myGetData(`https://jsonplaceholder.typicode.com/posts?id=${id}`, printData);
// }

// function printData(data) {
//   console.log(data);
// }
function deleteRow(id) {
  document.getElementById(id).style.display = 'none';
}

function renderData(data) {
  // get DOM element
  const tableElement = document.getElementById('dataTable');

  // setup DOM template with API data
  let template = data
    .map(post => {
      return `<tr id="${post.id}">
      <td>${post.id}</td>
      <td>${post.userId}</td>
      <td class="table-title">${post.title}</td>
      <td class="table-body">${post.body}</td>
      <td><button onclick="deleteRow(${post.id})">Delete</button></td>
      </tr>`;
    })
    .join('');

  // shows the data from API
  // console.log(template);

  // pass API data to DOM element through innerHTML
  function render(element, tmp) {
    element.innerHTML = tmp;
  }
  render(tableElement, template);
}
