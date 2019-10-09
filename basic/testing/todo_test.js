var text = document.getElementById("input-text");
var addbtn = document.getElementById("input-btn")

text.addEventListener("keyup", function(event){
    if (event.keycode === 13){
        document.getElementById("input-btn").click();
        document.getElementById("input-text").value = ""
    }
})

var btn_count = 0;
var li_count = 0
var ul = document.getElementById("list");

function adding(){

    var txtnode = document.createTextNode(text.value)
    var li = document.createElement("li");
    var button = document.createElement("button")
    button.id = btn_count
    button.innerHTML="Done!"
    li.id = li_count
    li.appendChild(txtnode)
    li.appendChild(button)
    ul.appendChild(li)
    button.addEventListener("click", function (){
        if(li.id === button.id){
            li.parentNode.removeChild(li)
        }
    })
    btn_count += 1
    li_count += 1
}