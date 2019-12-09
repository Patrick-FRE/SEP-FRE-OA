let getDataBtn = document.getElementById("header-button-get");
let clearDataBtn = document.getElementById('header-button-clear');
let table = document.getElementById('content-table');
let posts = [];

const fetchData = () => {
    if(posts.length !== 0) {
        table.style.display = 'block';
        return;
    }
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(result => {
            generateTableHead(table, Object.keys(result[0]));
            generateTableContent(table, result);
            posts = result;
        });
};

const clearData = () => {
    if(clearDataBtn.innerHTML === 'Clear Data') {
        table.style.display = 'none';
        clearDataBtn.innerHTML = 'Show Data';
    }
    else {
        table.style.display = 'block';
        clearDataBtn.innerHTML = 'Clear Data';
    }
}

getDataBtn.addEventListener('click', fetchData);
clearDataBtn.addEventListener('click', clearData);

const generateTableHead = (table,data) => {
    let head = document.createElement('thead');
    let row = document.createElement('tr');
    head.appendChild(row);
    table.appendChild(head);
    data.forEach(key => {
        let cell = document.createElement("th");
        if(key !== 'userId') {
            let text = document.createTextNode(key);
            cell.appendChild(text);
            row.appendChild(cell);           
        }
    });
}

const generateTableContent = (table,data) => {
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    data.forEach(element => {
        let row = document.createElement('tr');
        Object.keys(element).forEach(key => {
            if(key !== 'userId') {
                let cell = document.createElement('td');
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
                row.appendChild(cell);
            }
        });
        tbody.appendChild(row);
    });
}





