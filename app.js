//format code on mac: shift + option + F
document.getElementById("fetch").addEventListener("click", generateTable);
document.getElementById("clear").addEventListener("click", clearTable);

function clearTable() {
    let table = document.getElementById("dtable");
    if (table == null) return;
    console.log(table.rows.length);
    for (let i = table.rows.length; i > 0; i--) {
        document.getElementById("dtable").deleteRow(i - 1);
    }
    location.reload();
}

function generateTable() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            let body = document.getElementsByTagName("body")[0];
            if (document.getElementById('dtable') != null) {
                return;
            }
            let table = document.createElement('table');
            table.setAttribute("id", "dtable");
            let row = table.insertRow(0);
            let th0 = row.insertCell(0);
            let th1 = row.insertCell(1);
            let th2 = row.insertCell(2);
            th0.innerHTML = "user id";
            th1.innerHTML = "id";
            th2.innerHTML = "title";
            for (let i = 1; i <= 100; i++) {
                let row = table.insertRow(i);
                let userId = row.insertCell(0);
                let id = row.insertCell(1);
                let title = row.insertCell(2);
                userId.innerHTML = data[i].userId;
                id.innerHTML = data[i].id;
                title.innerHTML = data[i].title;
            }
            body.appendChild(table);
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos ", true);
    xhttp.send();
}