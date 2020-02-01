function myGetData(url, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
myGetData("https://jsonplaceholder.typicode.com/posts", getData);
function getData(data) {
  const tableElement = document.getElementById("dataTable");
  let dataloader = JSON.parse(data);
  let template = dataloader
    .map(
      post =>
        `<tr class="table-row" id="${post.id}">
        <td class="tb-id">${post.id}</td>
        <td class="tb-title">${post.title}</td>
        <td class="tb-body">${post.body}</td>
        <td class="td-action"><input class="btn-delete" onclick="deleteRow(${post.id})" type="button" value="Delete"/></td>
        </tr>`
    )
    .join("");
  render(template, tableElement);
}
function render(tmp, element) {
  element.innerHTML = tmp;
}
function deleteRow(id) {
  console.log("delete click");
  document.getElementById(id).style.display = "none";
}
