var ul = document.getElementById("list");
var input = document.getElementById("input-bar");
var random = document.createElement("button");
random.id = 0;

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btn").click();
  }
});

function remove_item(id) {
    document.getElementById(id).remove();
}

var count = 0;
function adding() {
    var li = document.createElement("li");
    var txtnode = document.createTextNode(input.value);
    var button = document.createElement("button");
    button.id = count;
    button.innerHTML = "Done!";
    button.setAttribute("class", count);
    button.addEventListener("click", function() {remove_item(parseInt(button.id))});

    li.appendChild(txtnode);
    li.appendChild(button);
    li.id = count;
    ul.appendChild(li);
    count += 1;
}