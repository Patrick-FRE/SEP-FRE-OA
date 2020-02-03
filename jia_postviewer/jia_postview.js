// Jia Post Viewer


function myGetData(url, callbackFn) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //typical action to be performed when the document is ready
            // console.log(this); //this=xmlhttprequest
            callbackFn(JSON.parse(this.responseText));
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
}

myGetData("https://jsonplaceholder.typicode.com/posts", renderData);

function deleteRow(id) {
    document.getElementById(id).style.display = 'none';
}

function renderData(data) {
    const tableElement = document.getElementById("dataTable");

    let tmplate = data.map(post => {
        return `<tr id=${post.id}>
        <td>${post.userId}</td>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
        <td><button onclick="deleteRow(${post.id})">Delete</button></td>
        </tr>`
    })
    .join("");
    console.log(tmplate);
    function render(tmp, element) {
        element.innerHTML = tmp;
    }

    render(tmplate, tableElement);

}