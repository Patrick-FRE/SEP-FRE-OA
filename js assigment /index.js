function reverseNum(num) {
  num = "" + num;
  return num
    .split("")
    .reverse()
    .join("");
}
// console.log(reverseNum(12345));

function isPalindrome(str) {
  let ans = str;
  let reversed = str
    .split("")
    .reverse()
    .join("");
  if (ans === reversed) {
    return true;
  } else return false;
}
// console.log(isPalindrome("madam"));

function getSubstring(str) {
  let i,
    j,
    result = [];
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result.join();
}
// console.log(getSubstring("dog"));

function order(str) {
  let newStr = str
    .split("")
    .sort()
    .join();
  return newStr;
}
// console.log(order("cdba"));

// if return length of the longest word!!
// function longestWord(str) {
//   let longWord = 0
//   let wordSplit = str.split(' ');
//   for (let i = 0; i < wordSplit.length; i++){
//     if (wordSplit[i] < longWord) {
//       longWord = wordSplit.length
//     }
//   }
//   return longWord
// }

function firstLetter(str) {
  let arr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr;
}
// console.log(firstLetter("i need you"));
function longestWord(str) {
  let strArray = str.split(" ");
  let orderArr = strArray.sort((a, b) => {
    return a.length < b.length;
  });
  return orderArr[0];
}
// console.log(longestWord("I am a good boy"));
function vowCheck(str) {
  let vowList = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowList.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}
// console.log(vowCheck("i love you"));

function isPrime(num) {
  if (num === 1) return false;
  else if (num === 2) return true;
  else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}
// console.log(isPrime(23));

//9

//10
