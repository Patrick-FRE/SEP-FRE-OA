// function adding() {
//     var x = document.getElementById("input-bar").value
//     document.getElementById("addedtodo").innerHTML = x  
// }

var input = document.getElementById("input-bar");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btn").click();
  }
});

// function adding() {
//     var ul = document.getElementById("list");
//     var li = document.createElement("li");
//     var txtval = document.getElementById("input-bar").value
//     var txtnode = document.createTextNode(txtval);
//     li.appendChild(txtnode);
//     ul.appendChild(li);
// }
// keydown input[type="text"] function(event, template) {
//     if ((27 === event.which) || (13 === event.which)) {
//         event.preventDefault();
//         event.currentTarget.value = "";
//     }
// }
// function removeItem(){
// 	var ul = document.getElementById("list");
//   var input = document.getElementById("input-bar");
//   var item = document.getElementById(input.value);
//   ul.removeChild(item);
// }
function adding() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var txtval = document.getElementById("input-bar").value
    var txtnode = document.createTextNode(txtval);
    li.appendChild(txtnode);
    var button = document.createElement("button");
    button.innerHTML = "Done!";
    button.onclick = function removeitem(){
        var fake_btn = document.getElementsByClassName("fake-btn")
        ul.removeChild(ul.lastChild);

        // var ul = document.getElementById("list");
        // var input = document.getElementById("input-bar");
        // var item = document.getElementById(input.value);
        // ul.removeitem(txtnode);
    }
    li.appendChild(button);
    li.setAttribute("class","fake-btn");
    ul.appendChild(li);
}