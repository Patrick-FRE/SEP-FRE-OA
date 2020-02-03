//Write a JavaScript function which says whether a number is perfect. 
function is_perfect(number){
    var temp=0;
    for(var i=1;i<=number/2;i++){
        if(number%i===0){
            temp+=i;
        }
    }
    if(temp===number&& temp!==0){
        console.log("It is perfect num");
    }else{
        console.log("It is not perfect num");
    }
}
is_perfect(1);
is_perfect(4);
is_perfect(8);
is_perfect(6);