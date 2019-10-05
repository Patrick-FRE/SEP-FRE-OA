// function checking() {
//     var checkbox = document.querySelectorAll("input:checked")
//     var checkboxnumb = checkbox.length
    
//     if ()


// //     for (var i = 0; i < checkboxnumb; i++)
//         array.push(checkbox[i].values)
//         console.log(array)
// }

// for (var i = 0; i < checkbox.length; i++){
//  array.push(checkbox[i].value)
 
// }
function checking() {
    var checkbox = document.querySelectorAll("input:checked")
    for (var i = 0; i < checkbox.length; i++){
        if (i < 3){
            console.log(i)
        }
        else{
            alert("NO");
            checkbox = false;
        }
    }
}