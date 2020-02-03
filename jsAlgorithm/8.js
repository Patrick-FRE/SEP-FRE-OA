function findPrime(n){
    if(n===1){
        return false;
    }else if(n===2){
        return true;
    }else{
        for(var x=2;x<n;x++){
            if( n%x ===0){
                //false means it is not prime
                return false;
            }
        }
        return true;
    }
}

console.log(findPrime(23));
