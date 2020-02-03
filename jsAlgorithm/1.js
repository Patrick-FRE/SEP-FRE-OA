//Write a JavaScript function that reverse a number
function reverseNum(n){
    //1:convert the number to string
    n = n + "";
    //2: return new num(generate an array, resverse, convert to string)
    return n.split("").reverse().join("");
}

console.log(reverseNum(12345));