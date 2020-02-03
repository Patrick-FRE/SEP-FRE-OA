//Write a JavaScript function that returns a passed string with letters in alphabetical order. 
function alphabet_order(str){
    // 1:sort() method is used to sort the elements of an array in place and returns the array
    // 2:join() method is used to join all elements of an array into a string.
    return str.split('').sort().join('');
}

console.log(alphabet_order("defsa"))