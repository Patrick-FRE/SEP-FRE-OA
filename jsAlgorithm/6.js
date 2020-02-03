//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 

function findLongestWord(str){
    //split the string into an array of strings
    var strSplit=str.split(' ');
    //set a var that holds the length of longest word
    var longestWord=0;
    var finalWord;
    //for loop
    for(var i=0;i<strSplit.length;i++){
        if(strSplit[i].length>longestWord){
            longestWord=strSplit[i].length;
            finalWord=strSplit[i];
        }
    }
    //return the longest word
    return finalWord;
}

console.log(findLongestWord("The framework of front-end"));

