function getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById("todos").innerHTML = JSON.stringify(data);
    });
}

function clearTodos() {
    document.getElementById("todos").innerHTML = "";
}