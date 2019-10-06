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

var storage = [];
function checking (){
    if (count > 2){
        alert("no")
    } else if (document.getElementById("why").checked){
        count += 1
    } else if (document.getElementById("what").checked){
        count += 1
    } else if (document.getElementById("how").checked){
        count += 1
    } else if (document.getElementById("when").checked){
        count += 1
    }
}
