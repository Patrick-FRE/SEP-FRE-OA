let tasks = ["Finish assignment", "Go to class"];
let ulElment = document.getElementById("taskList");

function showTasks(tasks){
    for(let i = 0; i < tasks.length; i++){
        let liElement = document.createElement("li");
        let task = tasks[i];
        liElement.innerHTML = task + "<span><i class='fas fa-trash-alt'></i></span>";  
        ulElment.appendChild(liElement);
    }
}

function addDeleteListener(){
    let listItems = document.getElementsByTagName("span");
    for(let i = 0; i < listItems.length; i++){
        listItems[i].addEventListener("click", function(){
            let index = tasks.indexOf(this.parentElement.textContent);
            tasks.splice(index, 1);
            this.parentElement.style.display = "none";
        });  
    }
}

    // let listItems = document.getElementsByTagName("span");
    // for(let i = 0; i < listItems.length; i++){
    //     listItems[i].addEventListener("click", function(){
    //         let index = tasks.indexOf(this.parentElement.textContent);
    //         tasks.splice(index, 1);
    //         ulElment.innerHTML = "";
    //         showTasks(tasks);
    //     });  
    // }


(function (tasks){ 
    showTasks(tasks);
    addDeleteListener();
})(tasks);

document.querySelector("input[type='text']").addEventListener("keypress", function(event){
    if(event.which === 13 && this.value !== ""){
        let todoText = this.value;
        this.value = "";
        tasks.push(todoText);
        ulElment.innerHTML = "";
        showTasks(tasks);
        addDeleteListener();
    }
});






// $("ul").on("click", "li", function(){
//     $(this).toggleClass("completed");
// });

// $("ul").on("click", "span", function(event){
//     $(this).parent().fadeOut(500, function(){
//         $(this).remove();
//     });
//     event.stopPropagation();
// });

// $("input[type='text']").keypress(function(event){
//     if(event.which === 13){
//        var todoText =  $(this).val();
//        $(this).val("");
//        $("ul").append("<li>" + todoText + "<span><i class='fas fa-trash-alt'></i></span></li>")
//     }
// });