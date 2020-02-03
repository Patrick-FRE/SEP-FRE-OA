// Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg

function noRepeatStr(str){
    var str1="";
    for(var x=0;x<str.length;x++){
        //if str1 cannot find that char in itself
        if(str1.indexOf(str.charAt(x))==-1){
            str1+=str[x];
        }
    }
    return str1;
}

console.log(noRepeatStr("theoldmanthe"));
