// // function foo(){
// //     for(var i = 0; i<10; i++){
// //         setTimeout(()=>{
// //             console.log(i);
// //         }, 1000);
// //     }
// // }
// // foo();
function add(num) {
    var addBase = num;

    return function() {
        console.log(addBase);
    }
}
let a = add(5)

    }
}

// function test() {
//     var a = 'a';
//     console.log(a);
// }

// console.log(a)

foo(4)(3)(2)
foo(4)(3)(2)
function foo(a) {
    return function(b) {
        return function(c) {
            console.log(a,b,c);
            return (a * b * c);
        }
    }
}
