document.getElementById("fetch").addEventListener("click", generateTable);

function generateTable ()  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this);
                if (this.readyState == 4 && this.status == 200) {
                    // document.getElementById("demo").innerHTML =
                    console.log('get data from URL:')
                    console.log(JSON.parse(this.response));
                    //console.log(xhttp.response);
                    // resolve(JSON.parse(xhttp.response));//json.stringify(), convert string to object.
                    //cb(getDataB);
                    // getDataB(useData);
                }
            };
            xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1 ", true);
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