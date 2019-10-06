
var ul = document.getElementById("list");
var input = document.getElementById("input-bar");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   document.getElementById("btn").click();
   document.getElementById("input-bar").value = ""
  }
});

var count = 0;
function adding() {
    var li = document.createElement("li");
    var txtnode = document.createTextNode(input.value);
    var button = document.createElement("button");
    button.id = count;
    button.innerHTML = "Done!";
    button.setAttribute("class", "fake-btn");
    button.addEventListener("click", function() {remove_item(parseInt(button.id))});

    li.appendChild(txtnode);
    li.appendChild(button);
    li.id = count;
    ul.appendChild(li);
    count += 1;
}
function remove_item(id) {
    document.getElementById(id).remove();
}