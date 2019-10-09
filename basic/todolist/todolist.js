
var ul = document.getElementById("list");
var input = document.getElementById("input-bar")

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   document.getElementById("btn").click();
   document.getElementById("input-bar").value = ""
  }
});

var btn_count = 0;
var li_count = 0;
function adding() {
    var li = document.createElement("li");
    var txtnode = document.createTextNode(input.value);
    var button = document.createElement("button");
    
    li.id = li_count;
    button.id = btn_count;
    button.innerHTML = "Done!";

    li.appendChild(txtnode);
    li.appendChild(button);

    
    ul.appendChild(li);

    button.addEventListener("click", function(){
      if (button.id == li.id){
        li.remove()
    }});
    btn_count += 1;
    li_count += 1;
}
