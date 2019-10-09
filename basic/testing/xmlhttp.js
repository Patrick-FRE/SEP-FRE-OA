// function myAjexcall(url){
//     return new Promise((resolve, reject) => {
//         var rand = Math.random();
//         setTimeout(()=>{
//             console.log("first call")
//             resolve("resolve")
//         }, 10000)
//     })
// }

// function secondcall() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("second call")
//         }, 5000)
//     })
// } 
// var a = myAjexcall();
// a.then((data)=>{


// })
// console.log(a)


function myAjexcall(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}
var a = myAjexcall("https://jsonplaceholder.typicode.com/todos/1")
a.then(data=>{
    console.log(data)
}).catch(error=>{
    console.log(error);
})