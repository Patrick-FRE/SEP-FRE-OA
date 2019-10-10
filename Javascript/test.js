function myf(){
    var btn = document.querySelector('#btn');
    // console.log(text);
    btn.addEventListener('click',function(){
            // state.text = this.value;
            // console.log(state.text);
            var select = document.querySelector('select');
            var preText = document.querySelector('h1').innerText;
            var text;
            if(select.value == 'Default')
                text = 'Please Choose an Option';
            else
                text = preText + ' ' + select.value;
            //console.log(text);
            var div = document.querySelector('#show');
            var textNode = document.createTextNode(text);
            div.innerHTML = text;
    })
};
function pop(){
    var select = document.querySelector('select');
    // console.log(text);
    select.addEventListener('change',function(){
            // state.text = this.value;
            // console.log(state.text);
            alert(event.target.value);
    })
}
// function myh1(){
//     var h1 = document.querySelector('h1');
//     var text = state.text;
//     var textNode = document.createTextNode(text);
//     h1.innerHTML = text;
// }

// function myAjaxcall(url){
//     return new Promise((resolve,reject)=> {
//         resolve("Yes");
//         reject("No");
//     })
// }
// myAjaxcall().then(data => {
//     console.log(data);
// })
// myf();
// pop();

// var x;
// console.log(!!x);

function x(){
    var counter = 0;
    return ()=>{
        counter += 1;
        console.log(counter);
    }
}

const test = x();
test();
test();
test();