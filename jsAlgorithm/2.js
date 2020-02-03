//Write a JavaScript function that checks whether a passed string is palindrome or not? 
function check(word){
    let isPalindrome=true;
    for(let a=0,b=word.length-1;a<=b;a++,b--){
        if(word[a]!==word[b]){
            isPalindrome=false
        }
    }
    return isPalindrome ? "It is a plaindrome word":"It's not a plaindrome word";
}

console.log(check("abc"));
console.log(check("aba"));