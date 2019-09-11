//// Fetch posts
var data = fetch("https://jsonplaceholder.typicode.com/posts");
data.then(function (response) {
    return response.json();
}).then(function (data) {

    var tbody = document.getElementById("tblPost");
    var length = data.length;
    for (var i = 0; i < length; i++) {
        var tr = "<tr> <td>" + data[i].id + "</td><td>" + data[i].title + "</td><td>" + data[i].body + "</td> <td> <button id = 'myBtn' onclick ='detail(this)'> detail</button> </td>" + "<td> <button id = 'commentBtn' onclick ='comments(this)'>comments</button> </td></tr>";
        tbody.innerHTML = tbody.innerHTML + tr;
    }
})

// Button show
function show() {
    document.getElementById("tablediv").style.display = "block";
}
// Button clear
function hide() {
    document.getElementById("tablediv").style.display = "none";
}

//Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
function detail(obj) {
    document.getElementById("myModal").style.display = "block";
    var column1 = obj.parentNode.parentNode.children[0].innerHTML;
    var column2 = obj.parentNode.parentNode.children[1].innerHTML;
    var column3 = obj.parentNode.parentNode.children[2].innerHTML;
    document.getElementById("details").innerHTML = "<b>ID: </b>" + column1 + "<br>" + "<b>Title: </b>" + column2 + "<br>" + "<b>Body: </b>" + column3 + "<br>";

}

//When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}



////  Fetch comments

//Get the comment modal
var modal1 = document.getElementById("commentModal");
// Get the button that opens the modal
var btn1 = document.getElementById("commentBtn");
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
// When the user clicks the button, open the modal 

function comments(obj) {
    document.getElementById("commentModal").style.display = "block";
    var number1 = obj.parentNode.parentNode.children[0].innerHTML;
    var data1 = fetch("https://jsonplaceholder.typicode.com/comments?postId=" + number1);
    data1.then(function (response) {
        return response.json();
    }).then(function (data1) {
        var tbody1 = document.getElementById("tbl1Post");
        tbody1.innerHTML = "";
        var length1 = data1.length;
        for (var i = 0; i < length1; i++) {
            var tr1 = "<tr> <td>" + data1[i].id + "</td><td>" + data1[i].name + "</td><td>" + data1[i].email + "</td><td>" + data1[i].body + "</td></tr>";
            tbody1.innerHTML = tbody1.innerHTML + tr1;
        }
    })
}

//When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal1) {
//         modal1.style.display = "none";
//     }
// }