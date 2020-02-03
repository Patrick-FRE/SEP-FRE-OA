//Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function test(callbackFun){
    callbackFun();
}

function callbackFun(){
    console.log("this is a test");
}

test(callbackFun);
//console.log(test(callbackFun)); 