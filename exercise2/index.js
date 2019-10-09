
let checkboxes = document.getElementsByTagName("input");


// document.querySelector("button").addEventListener("click", function(){
//     let res = " "
//     for(let i = 0; i < checkboxes.length; i++){
//         if(checkboxes[i].checked === true){
//             res = res + checkboxes[i].value + " ";
//         }
//     }
//     document.querySelector("h2").innerText = "Hello" + res;
// });

let arr = [];
for(var i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener("click", function(){
        arr.push(checkboxes[i].value);
    });
}

