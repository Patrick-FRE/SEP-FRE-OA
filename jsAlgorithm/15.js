// Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
// Accept b and n from the user and display the result

// Math.exp(1);
// Return Ex, where x is 1
 
function exponentJs(b,n){
    var result=1;
    for(var i=1;i<=n;i++){
        result=b*result;
    }
    return result;
}
console.log(exponentJs(2,3));
