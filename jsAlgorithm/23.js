//Write a JavaScript function to find the first not repeated character. 
function firstNonRepeatedCharacter(str) {
    for (var i = 0; i < str.length; i++) {
        if(str.indexOf(str.charAt(i))==str.lastIndexOf(str.charAt(i))){
            //  console.log(str.charAt(i));
            //  break;
            return str.charAt(i);
        }
    }
}

// firstNonRepeatedCharacter("zbcabcd");
console.log(firstNonRepeatedCharacter("zbcabcd"));