function getDataA(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           console.log(JSON.parse(xhttp.response));
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhttp.send();
}
function getDataB(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           console.log(JSON.parse(xhttp.response));
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/2", true);
    xhttp.send();
}

getDataA();
getDataB();
