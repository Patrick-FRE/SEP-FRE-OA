 const url="https://jsonplaceholder.typicode.com/posts";

function getData(resolve){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState == 4 && this.status ==200){
            //JSON.parse(this.response);
          resolve(JSON.parse(xhttp.response));
           console.log("this value is:"+this);
            
        }
    };

    xhttp.open("GET",url,true);
    xhttp.send();
}




var p=new Promise((res)=>{
    getData(res);
}).then((users)=>{
    let html='';
            for(let i=0;i<users.length;i++){
               //console.log(users[i]);
                html +=`
                <tr class="tb-row">
                    <td class="tb-col">${users[i]["userId"]}</td>
                    <td class="tb-col">${users[i]["title"]}</td>
                    <td class="tb-col">${users[i]["body"]}</td>
                </tr>
                `;
            }

            document.getElementById("table-main").innerHTML=html; 
}).catch(err=>{
    console.log(err);
});



document.querySelector(".fetch").addEventListener("click",p); 