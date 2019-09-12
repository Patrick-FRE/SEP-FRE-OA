var data = fetch("https://jsonplaceholder.typicode.com/posts");
data.then(function (response) {
    return response.json();
}).then(function (data) {

    var tbody = document.getElementById("tblPost");
    var length = data.length;
    for (var i = 0; i < length; i++) {
        var tr = "<tr> <td>" + data[i].id + "</td><td>" + data[i].title + "</td><td>" + data[i].body + "</td><td> <button class = 'btn' onclick = 'newWindow(this)'> Detail </button></td></tr>"
        tbody.innerHTML = tbody.innerHTML + tr;
    }
})

function showTable(){
    document.getElementsByClassName('table-area')[0].style.display = "block";
}

function hideTable(){
    document.getElementsByClassName('table-area')[0].style.display = "none";
}

function newWindow(obj){
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    document.getElementById('id-name').innerHTML = obj.parentNode.parentNode.children[0].innerHTML;
    document.getElementById('header').innerHTML = obj.parentNode.parentNode.children[1].innerHTML;
    document.getElementById('body-content').innerHTML = obj.parentNode.parentNode.children[2].innerHTML;
    fetchComment();
}

function showComment(){
    document.getElementById('comment-area').style.display = "block";
}

function hideComment(){
    document.getElementById('comment-area').style.display = "none";
}

function fetchComment(){
    var id = document.getElementById('id-name').innerHTML;
    var data = fetch("https://jsonplaceholder.typicode.com/comments?postId="+id+"");
    data.then(function (response) {
        return response.json();
    }).then(function (data) {
        var tbody = document.getElementById("commentPost");
        tbody.innerHTML = "";
        var length = data.length;
        for (var i = 0; i < length; i++) {
            var tr = "<tr> <td>" + data[i].id + "</td><td>" + data[i].name + "</td><td>" + data[i].email + "</td><td>" + data[i].body + "</td></tr>"
            tbody.innerHTML = tbody.innerHTML + tr;
        }})
}