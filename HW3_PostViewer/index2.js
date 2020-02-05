// function fetchData(url, callbackFn) {
//   // implement
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       // Typical action to be performed when the document is ready:
//       callbackFn(JSON.parse(this.responseText));
//     }
//   };
//   xhttp.open('GET', url, true);
//   xhttp.send();
// }

// ================================================

// // fetchData with promise
// function fetchData(url, options = { method: 'GET' }) {
//   return new Promise((resolve, reject) => {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:

//         let result = { json: () => JSON.parse(this.responseText) };
//         resolve(result);
//       } else if (this.readyState == 4 && this.status !== 200) {
//         reject(this.response);
//       }
//     };
//     xhttp.open(options.method, url, true);
//     xhttp.send();
//   });
// }

// fetchData('https://jsonplaceholder.typicode.com/posts')
//   .then(resolve => {
//     resolve.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error));
// ================================================
// fetchData('https://jsonplaceholder.typicode.com/posts', renderData);

// function nextAjax(data) {
//   let id = getBigestId(data);
//   myGetData(`https://jsonplaceholder.typicode.com/posts?id=${id}`, printData);
// }

// function printData(data) {
//   console.log(data);
// }

// function deleteRow(id) {
//   document.getElementById(id).style.display = 'none';
// }

// function renderData(data) {
//   // get DOM element
//   const tableElement = document.getElementById('dataTable');

//   // setup DOM template with API data
//   let template = data
//     .map(post => {
//       return `<tr id="${post.id}">
//       <td>${post.id}</td>
//       <td>${post.userId}</td>
//       <td class="table-title">${post.title}</td>
//       <td class="table-body">${post.body}</td>
//       <td><button onclick="deleteRow(${post.id})">Delete</button></td>
//       </tr>`;
//     })
//     .join('');

//   // shows the data from API
//   // console.log(template);

//   // pass API data to DOM element through innerHTML
//   function render(element, tmp) {
//     element.innerHTML = tmp;
//   }
//   render(tableElement, template);
// }

class AntraPromise {
  constructor(callBackFn) {
    this.state = 'pending';
    callBackFn(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(data) {
    this.state = 'resolve';
    this.callBackFnThen(data);
  }
  reject(data) {
    this.state = 'reject';
    this.callBackFnCatch(data);
  }
  then(callBackFnThen) {
    this.callBackFnThen = callBackFnThen;
    return this;
  }
  catch(callBackFnCatch) {
    this.callBackFnCatch = callBackFnCatch;
  }
}

const myPromise = new AntraPromise((res, rej) => {
  setTimeout(() => {
    rej('Error');
  }, 2000);
})
  .then(data => console.log(data))
  .then(data => console.log(data))
  .catch(error => console.log('error', error));
