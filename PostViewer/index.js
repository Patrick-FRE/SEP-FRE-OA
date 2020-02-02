console.log("Hello World");
            const table = document.getElementById('dataTable');
            let data = [];
            function getData(url){
                var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {      
                    data = JSON.parse(this.responseText);
                    // console.log('data:',data);
                    let template= data.map( user =>{
                    return `
                        <tr class="user-row" id="${user.id}">
                            <th>${user.userId}</th>
                            <th>${user.id}</th>
                            <td>${user.title}</td>
                            <td>${user.body}</td>
                            <td><input type="button" onclick="removeUser(${user.id})" value="DELETE"></td>
                        </tr>
                    `
                    }).join('');

                    table.innerHTML = template;
                }
                };
                    xhttp.open("GET", url, true);
                    xhttp.send();
            };   
            
            getData('https://jsonplaceholder.typicode.com/posts');


            function removeUser(id){
                document.getElementById(id).style.display = "none";               
            }  