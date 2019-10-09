// function checking() {
//     var checkbox = document.querySelectorAll("input:checked")
//     var checkboxnumb = checkbox.length
    
//     if ()


//     for (var i = 0; i < checkboxnumb; i++)
//         array.push(checkbox[i].values)
//         console.log(array)
// }

// for (var i = 0; i < checkbox.length; i++){
//  array.push(checkbox[i].value)
 
// }
// function checking() {
//     var checkbox = document.querySelectorAll("input:checked")
//     for (var i = 0; i < checkbox.length; i++){
//         if (i < 2){
//             console.log(i)
//         }
//         else{
//             alert("NO");
//             document.querySelector("input:checked") = false;
//         }
//     }
// }
// function checking() {
//     var checkbox = document.querySelectorAll()
//     var array =[]
// }
// var count = 0;

// function checking(why){
//     count += 1;
//     document.getElementBy("why").id = count
// }
// function checking(when){
//     count += 1;
//     document.getElementById("when").id = count
// }
// function checking(what){
//     count += 1;
//     document.getElementById("what").id = count
// }
// function checking(how){
//     count += 1;
//     document.getElementById("how").id = count
// }

var queue = [];

function checking(id){
    queue.push(id)
    if (queue.length===3){
        queue[0].checked = false
        queue.shift()
    }
}

//     var count = 0;
//     if (why.addEventListener("click", function() {
//         count += 1
//         var why = document.getElementById("why").checked
//         queue.push(count)
//         if (queue.length===3){
//             queue[0] = document.getElementById("why").checked=false
//             queue.shift()
//         }
//     })
//     )
//     console.log(1)
// }

// why_status = false;

// function checking(event){
//     var count = 0;

//     var why = document.getElementById("why");
//     if (why_status === false) {
//         why.checked = true;
//         why_status = true;
//     }
//     if (why_status === true) {
//         why.addEventListener("click", function() {
//             count +=1;
//             queue.push("why");
//         })
//     }
//     if (queue.length===3){
//         queue[0] = document.getElementById("why").checked=false
//         queue.shift()
//     }
// }
//     } else if (document.getElementById("when").checked){
//         count += 1
//         storage.push(count)
//         if (storage.length===3){
//             storage[0] = document.getElementById("when").checked=false
//             storage.shift()
//         }
//     } else if (document.getElementById("what").checked){
//         count += 1
//         storage.push(count)
//         if (storage.length===3){
//             storage[0] = document.getElementById("what").checked=false
//             storage.shift()
//         }
//     } else if (document.getElementById("how").checked){
//         count += 1
//         storage.push(count)
//         if (storage.length===3){
//             storage[0] = document.getElementById("how").checked=false
//             storage.shift()
//         }
//     }
// }

// function checking() {
//     var input = document.getElementsByClassName("checkbox")
//     for (var i = 0 ; i <input.length; i++){
//         if (input[i] == 2){

//         }
//     }
    // .checked = true;
// }
// function why() {
//     var input = document.querySelectorAll("input[type=checkbox]")
//     for (var i = 0 ; i <input.length; i++){
//         input[i].checked = false;
//     }
//     why.checked = true;
// }
// function how() {
//     var input = document.querySelectorAll("input[type=checkbox]")
//     for (var i = 0 ; i <input.length; i++){
//         input[i].checked = false;
//     }
//     how.checked = true;
// }
// function when() {
//     var input = document.querySelectorAll("input[type=checkbox]")
//     for (var i = 0 ; i <input.length; i++){
//         input[i].checked = false;
//     }
//     when.checked = true;
// }

// var queue = []

// function checking(){
//     var check = document.querySelectorAll("input[type=checkbox]")
//     for (var i = 0; i < 1; i++){
//        queue.push(i)
//        if (queue.length===3){
//            queue[0] = document.getElementsByClassName("checkbox").checked = false
//        }
//     }
// }