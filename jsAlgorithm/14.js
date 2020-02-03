//Write a JavaScript function to convert an amount to coins
function convertToCoins(num,coins){
    if(num===0){
        return [];
    }else{
        if(num>=coins[0]){
            rest=num-coins[0];
            return [coins[0]].concat(convertToCoins(rest,coins));
        }else{
            //shift:remove the firstone in coins
            coins.shift();
            return convertToCoins(num,coins);
        }
    }
}

console.log(convertToCoins(43, [1,2,4,3]));
