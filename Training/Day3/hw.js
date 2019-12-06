//1 Reverse number

function foo(num){
    let rev = 0;
    while(num!=0){
        let pop = num%10;
        num /= 10;
        rev = rev*10 + pop;
    }
    return rev;
}

console.log(foo(123));

//2 Check Palindrome

//3 Generate all combinations of a String

//4

//5 Convert the first letter of each word of the String in upper case

//6 Find the longest word within the String


//7 