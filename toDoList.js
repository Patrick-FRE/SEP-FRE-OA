//get the value of the input of the html 
const inputElement = document.getElementById("myInput");
//event handler, check if a certain key is pressed to execute this function
inputElement.addEventListener("keypress",()=>{
    //when the enter button is pressed (enter keycode = 13)
    if(event.keyCode == 13){
        //value: the keyboard input, event: enter, target: input bar
        console.log(event.target.value);
        //create a list
        var li = document.createElement("li");
        //get the text node to add to the list
        var toAddToList = document.createTextNode(event.target.value);
        //add the value to the list
        li.appendChild(toAddToList);
        document.getElementById("toDoList").appendChild(li);
    }
});