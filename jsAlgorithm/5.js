//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
function uppercase(str){
    var oldArray=str.split(' ');
    var newArray=[];

    for(var x=0;x<oldArray.length;x++){
        newArray.push(oldArray[x].charAt(0).toUpperCase()+oldArray[x].slice(1));
    }
    return newArray.join(' ');
}
console.log(uppercase("I love GMU university"));