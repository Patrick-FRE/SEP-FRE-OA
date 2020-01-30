//Jia

//1.
function reverseNumber(num) {
    let n = num.toString();
    return Number(n.split("").reverse().join(""));
}
//console.log(reverseNumber(32243));


//2.
function checkPalindrome(str) {
    return str === str.split("").reverse().join("");
}
//console.log(checkPalindrome("rar"));


//3.
function generateCombo(str) {

}


//4.
function alphabeticalSort(str) {
    return str.split("").sort().join("");
}
//console.log(alphabeticalSort("webmaster"));


//5.
function upperCase(str) {
    let tmpArr = str.split(" ");
    for (let i=0; i<tmpArr.length; i++) {
        tmpArr[i] = tmpArr[i].charAt(0).toUpperCase() + tmpArr[i].slice(1);
    }
    return tmpArr.join(" ");
}
//console.log(upperCase('the quick brown fox'));


//6.
function longestWord(str) {
    let tmpArr = str.split(" ");
    let longestLen = 0;
    let longestIndex = 0;
    for (let i=0; i<tmpArr.length; i++) {
        if (tmpArr[i].length > longestLen) {
            longestLen = tmpArr[i].length;
            longestIndex = i;
        }
    }
    return tmpArr[longestIndex];
}
//console.log(longestWord('Web Development Tutorial' ));


//7.
function countVowel(str) {
    let tmpArr = str.split("");
    let count = 0;
    for (let i=0; i<tmpArr.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].indexOf(tmpArr[i].toLowerCase()) != -1) {
            count++;
        }
    }
    return count;
}
//console.log(countVowel('The quick brown fox'));


//8.

