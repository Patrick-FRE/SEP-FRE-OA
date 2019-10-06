var input = document.getElementById("input-bar");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btn").click();
  }
});


// var button = document.getElementById(index);
// if (any created button with the button_id = user_specific_index_# is selected) {
//     remove_item();
// }




var arr = {};
var count = 0;
function adding() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var txtval = document.getElementById("input-bar").value
    var txtnode = document.createTextNode(txtval);
    li.appendChild(txtnode);
    arr[count] = txtnode;
    
    var button = document.createElement("button");
    button.id = count;
    button.innerHTML = "Done!";
    
    li.appendChild(button);
    li.setAttribute("class", "fake-btn");
    ul.appendChild(li);
    count += 1;
    button.onclick = remove_item();
}

function remove_item() {
    var fake_btn = document.getElementsByClassName("fake-btn")
    ul.removeChild(ul.childNodes[index]);
}
