
document.querySelector("button").addEventListener("click", function(){
    let selectElement = document.getElementById("dropdown");
    let option = selectElement.options[selectElement.selectedIndex];
    let name = option.value;
    document.querySelector("h2").innerText = "Hello " + name;  
});


