// Write a JavaScript function that accepts two arguments, a string and a letter 
// and the function will count the number of occurrences of the specified letter within the string. 

var char_count= function(str, letter){
    var count=0;
    for(var pos=0;pos<str.length;pos++){
        if(str.charAt(pos)==letter){
            count++;
        }
    }
    return count;
}

console.log(char_count("China","C"));