//Write a JavaScript function to  get the number of occurrences of each letter in specified string
function countLetterOccurance(str){
    //Alphabetic order - so if one letter is the same with the next one, the counter increases.
    var str1=str.split("").sort().join("");
    // console.log(str);
    // console.log(str1);
    var counter=1;
    for(let i=0;i<str1.length;i++){
        if(str1[i]==str1[i+1]){
            counter++;
        }else{
            console.log("The letter of "+str1[i]+" has "+ counter+" times");
            counter=1;
        }
    }
}

countLetterOccurance("asdfghasd");