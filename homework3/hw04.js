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

myGetData("https://jsonplaceholder.typicode.com/posts?_limit=10", getData);

function getData(data) {
  const tableElement = document.getElementById("dataTable");
  let dataHolder = JSON.parse(data);
  let template = dataHolder
    .map(
      post =>
        `<tr id="${post.id}">
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
            <td><input class="btn-delete" type="button" value="Delete"/></td>
        </tr>`
    )
    .join("");
  //render(template, tableElement);
  tableElement.innerHTML=template;
}
class UI{
    static deleteRow(element) {
      //document.getElementById(id).style.display = "none";
      if(element.classList.contains('btn-delete')){
        element.parentElement.parentElement.remove();
      }
    }
}

document.querySelector('#dataTable'),addEventListener('click',e=>{
    //delete from UI  
    UI.deleteRow(e.target);
})

