//Write a JavaScript function to compute the factors of a positive integer. 
function findFactors(n){
    var num_factors=[];
    var i;
    
    for(i=1;i<=n;i++){
        if(n%i===0){
            num_factors.push(i);
        }
    }

    return num_factors;
}

console.log(findFactors(27));
