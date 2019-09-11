// JavaScript source code
function btnShow() {
    document.getElementById("btnClass").style.visibility = "visible";
    var data = fetch("https://jsonplaceholder.typicode.com/posts");
    data.then(function(response){
        return response.json();
    }).then(function(data) {
        var tbody = document.getElementById("btnClass");
        var length = data.length;
        for(var i = 0; i<length; i++){
            var tr = "<tr> <td>" + data[i].id + "</td><td>" + data[i].title + 
            "</td><td>" + "<button type='button' id='btn1' onclick='action(" + data[i].id + ")'>Action</button> <button type ='button' id='btn2' onclick='comments(" + data[i].id  + ")'>Comments</button>"; 
            tbody.innerHTML = tbody.innerHTML + tr;
        }
    })
    
}


function btnHide() {
    document.getElementById("btnClass").style.visibility = "hidden";  
}

function action(id){
    document.getElementById("actions").style.display = "block";
    var data = fetch("https://jsonplaceholder.typicode.com/posts?id=" + id);
    data.then(function(response){
        return response.json();
    }).then(function(data) {
        var actions = document.getElementById("actions");
        actions.innerHTML='';
                    var tr = "User ID: " + data[0].userId + "<br/>ID: " + data[0].id + 
                    "<br/>Title: " + data[0].title + "<br/>Body: " + data[0].body + "<br/>"
                    +"<button type='button' onclick='closeActions()'>Back</button>"; 
                    actions.innerHTML = actions.innerHTML + tr;   
    })
}

function closeActions(){
    document.getElementById("actions").style.display = "none";
    
}

function comments(id){
    document.getElementById("actions").style.display = "block";
    var data = fetch("https://jsonplaceholder.typicode.com/comments?postId=" + id);
    data.then(function(response){
        return response.json();
    }).then(function(data){
        var comments = document.getElementById("actions");
        var length = data.length;
        comments.innerHTML='';
        for (var i = 0; i<length; i++){
            var tr = "PostID: " + data[i].postId + "<br/> ID: " + data[i].id + "<br/> Name: "+ data[i].name +
             "<br/> Email: " + data[i].email + "<br/> Body: " + data[i].body + "<br/><br/>";
             comments.innerHTML = comments.innerHTML + tr;
        }
        comments.innerHTML = comments.innerHTML + "<button type='button' onclick='closeActions()'>Back</button><br/><br/>";
    })
}
