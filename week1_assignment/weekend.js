function getData(cb) {
    clearData();
    console.log('show table')
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(xhttp);
        if (this.status == 200 && this.readyState == 4) {
            console.log('data getted');
            // console.log(xhttp.response)
            cb(JSON.parse(xhttp.response));
        }
    }
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhttp.send();
}

function createTable(data_set) {
    console.log('createTable executed');
    // create table node, and append it to showtable tag
    var table = document.createElement('table');
    document.getElementById('showtable').appendChild(table)
    // create the header of the table and append it to table
    // header should have 4 columns
    // first create a tr tag, and create 4 th tag append to tr.
    // then append tr tag to table tag.
    // create tr tag
    var header = document.createElement('tr');
    // create 4 th tag, assign the innerText, and append it to tr
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    var th4 = document.createElement('th');
    th1.innerText = 'userId'
    th2.innerText = 'id';
    th3.innerText = 'title';
    th4.innerText = 'body'
    header.appendChild(th1)
    header.appendChild(th2)
    header.appendChild(th3)
    header.appendChild(th4)
    // append tr to table
    table.appendChild(header);

    // append all the data to table
    // for each record, create a tr tag
    // create 4 td tag corresponsed to record, and append it to tr
    // finally append the created tr to table.
    for (let i = 0; i < data_set.length; i++) {
        let tr = document.createElement('tr');
        // create 4 td tag, assign the innerText, and append it to tr
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        td1.innerText = data_set[i]['userId']//[i].userId
        td2.innerText = data_set[i]['id'];
        td3.innerText = data_set[i]['title']
        td4.innerText = data_set[i]['body']
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        // append tr to table
        table.appendChild(tr);
    }
}

function promiseFnc() {
    new Promise((resolve, reject) => {
        getData(resolve);
    }).then((val) => {
        createTable(val)
    })
}

function clearData() {
    console.log('clear table')
    var table_parent = document.getElementById('showtable');
    // table_parent.innerText=''
    while (table_parent.firstChild) {
        table_parent.removeChild(table_parent.firstChild)
    }
}
