// console.log(5 + 6 + 'Hello');

// console.log("" == 0);

// function foo(){
//     var a = 1;

//     console.log(a);

//     // a = 5;
// }
// foo();

function foo(num){
    var myNum = num ;
    return function(num){
        myNum *= num;
        return function(num){
            myNum *= num;
            return myNum;
        }
    }
    // a = 5;
}

console.log(foo(6)(5)(4));