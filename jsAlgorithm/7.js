// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 

function vowel_count(str1){
    var vowelLetter='aeiouAEIOU';
    var vcount=0;
    //The indexOf() method returns the position of the first occurrence of a specified value in a string.
    //This method returns -1 if the value to search for never occurs.
    for(var x=0;x<str1.length;x++){
        if(vowelLetter.indexOf(str1[x]) !==-1){
            vcount+=1;
        }
    }
    return vcount;
}

console.log(vowel_count("You are a good guy"));
