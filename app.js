document.getElementById("fetch").addEventListener("click", generateTable);
document.getElementById("clear").addEventListener("click", clearTable);
function clearTable() {
    let table = document.getElementById("dtable");
    // table. parentNode. removeChild(table);
    // var Parent = document.getElementById(tableID);
    console.log(table.rows.length);
    for(let i = table.rows.length; i > 0;i--)
    {
        document.getElementById("dtable").deleteRow(i-1);
    }
    location.reload();
}
function generateTable ()  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        // console.log(this);
                if (this.readyState == 4 && this.status == 200) {
                    // document.getElementById("demo").innerHTML =
                    // console.log('get data from URL:')
                    let data = JSON.parse(this.response);
                    // console.log(data);
                    // console.log("data length: ", data.length)
                    // userId: 1, id: 1, title: 
                    let body = document.getElementsByTagName("body")[0];
                    let table = document.createElement('table');
                    table.setAttribute("id", "dtable");
                    // var table = document.getElementById("table");
                    for (let i = 0; i < 100; i++){
                        let row = table.insertRow(i);
                        let userId = row.insertCell(0);
                        let id = row.insertCell(1);
                        let title = row.insertCell(2);
                        userId.innerHTML = data[i].userId;
                        id.innerHTML = data[i].id;
                        title.innerHTML = data[i].title;
                    }
                    body.appendChild(table);
                    // var row = table.insertRow(0);
                    // var cell1 = row.insertCell(0);
                    // var cell2 = row.insertCell(1);
                    // cell1.innerHTML = "NEW CELL1";
                    // cell2.innerHTML = "NEW CELL2";

                    // var x = document.createElement("TABLE");
                    // x.setAttribute("id", "myTable");
                    // document.body.appendChild(x);
                    // console.log(JSON.parse(this.response));
                    //console.log(xhttp.response);
                    // resolve(JSON.parse(xhttp.response));//json.stringify(), convert string to object.
                    //cb(getDataB);
                    // getDataB(useData);
                }
            };
            xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos ", true);
            xhttp.send();
        }


//         function httpGetAsync(theUrl, callback)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() { 
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", theUrl, true); // true for asynchronous 
//     xmlHttp.send(null);
// }