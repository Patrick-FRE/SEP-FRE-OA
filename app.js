// ``` Click Show and Hide button at Nav bar:
function clickTable() {
    let t = document.getElementById('newTable');
    let popUp = document.getElementById('popUp');
    if (t.style.display === 'block') {
        t.style.display = 'none';
        popUp.style.display = 'none';

    } else {
        t.style.display = 'block';
    }

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 100; i++) {
                let table_body = document.getElementsByTagName('tbody')[0];
                table_body.innerHTML +=
                    '<tr>' +
                    // if onclick the whole <tr>, the detail button couldn't be clicked:
                    // '<tr data-postId="' + data[i].postId + '"onclick="clickTr(this)">' +
                    '<td class="idBtn" data-postId="' + data[i].postId + '"onclick="clickTr(this)">' + data[i].id + '</td>' +
                    '<td class="idBtn" data-postId="' + data[i].postId + '"onclick="clickTr(this)">' + data[i].name + '</td>' +
                    '<td class="idBtn" data-postId="' + data[i].postId + '"onclick="clickTr(this)">' + data[i].email + '</td>' +
                    '<td class="dtlBtn" data-detail="' + data[i].body + '"onclick="clickDetail(this)">Click for Detail</td>' +
                    '</tr>'
            }
        })
}

// ``` Click any table-row to popup new table (search by postId):
function clickTr(btn) {
    console.log(btn.getAttribute("data-postId"))
    let postId = btn.getAttribute("data-postId");

    let popUpTable = document.getElementById('popUpTable');
    popUpTable.style.display = 'block';

    // a. popup table title:
    popUpTable.innerHTML = ' -- PostId ' + postId + ' -- ' +
        '<br/><br/><tr>' +
        '<th class="popUpCell">PostId</th>' +
        '<th class="popUpCell">Id</th>' +
        '<th class="popUpCell">Name</th>' +
        '<th class="popUpCell">Email</th>' +
        '<th class="popUpCell">Detail</th>' +
        '</tr><hr/>';

    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                // b. popup table rows:
                popUpTable.innerHTML +=
                    '<tr id="newTr">' +
                    '<td class="popUpCell">' + data[i].postId + '</td>' +
                    '<td class="popUpCell">' + data[i].id + '</td>' +
                    '<td class="popUpCell">' + data[i].name + '</td>' +
                    '<td class="popUpCell">' + data[i].email + '</td>' +
                    '<td class="popUpCell dtlBtn" data-detail="' + data[i].body + '"onclick="clickDetail(this)">Click for Detail</td>' +
                    '<hr/>'
            }
            // c. popup table clear:
            popUpTable.innerHTML += '<br/><button onclick="clearPopTable()">clear</button>';

        })

}

function clearPopTable() {
    let popUpTable = document.getElementById('popUpTable');
    popUpTable.style.display = 'none';
}


// ``` Click detail button to popup detail
function clickDetail(btn) {
    console.log(btn.getAttribute("data-detail"))
    let detail = btn.getAttribute("data-detail");

    let popUp = document.getElementById('popUp');
    popUp.style.display = 'block';
    popUp.innerHTML = detail + '<br/><br/><button onclick="clearPop()">close</button>';
}

function clearPop() {
    let popUp = document.getElementById('popUp');
    popUp.style.display = 'none';
}

