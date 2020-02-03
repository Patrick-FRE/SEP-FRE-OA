//Write a JavaScript function that generates all combinations of a string. 
function allCombination(str){
    newArray=new Array();
    for(i=0;i<str.length;i++){
        for(j=i+1;j<str.length+1;j++){
            //do not include j
            newArray.push(str.slice(i,j));
        }
    }
    return newArray;
}

console.log(allCombination("apple"));