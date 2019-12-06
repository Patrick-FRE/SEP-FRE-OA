
var test = require('unit.js');
/**
1. Write a JavaScript function that reverse a number. Example x = 32243;
Expected Output : 34223
 */
var func1 = function myReverse(num) {
    var ansArr = [];
    while (num != 0) {
        ansArr.push(num % 10);
        num = Math.round(num / 10);
    }
    var len = ansArr.length;
    var ans = 0;
    for (var i = 0; i < len; i++) {
        ans =  ans *10 + ansArr[i];
    }
    // console.log("ans is: ", ans);
    return ans;
}

// console.log(func1(2314))

/***
 * 
2. Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 */
var func2 = function isPalindrome(str) {
    var len = str.length;
    console.log(len);
    var i = 0, j = len-1;
    while (i < j) {
        while (i < j && str.charAt(i) == ' ') i++;
        while (i < j && str.charAt(j) == ' ') j--;
        if (i >= j) return true;
        if (str.charAt(i) != str.charAt(j)) return false;
        i++;
        j--;
    }
    return true;
}

// console.log(func2("madam"));
// console.log(func2("nurses run"));
// console.log(func2("abac"));
/**
 * 3. Write a JavaScript function that generates all combinations of a string. Example string : 'dog'
Expected Output : d,do,dog,o,og,g
 */
function dfs (str, cur, idx, len, ans) {
    if (idx == len) return;
    dfs(str, cur, idx+1, len, ans);
    ans.push(cur + str.charAt(idx));
    dfs(str, cur + str.charAt(idx), idx+1, len, ans);
}
var func3 = function generateCombination(str) {
    var ans = [];
    var len = str.length;
    for (var i = 0; i < len; i++) {
        for (var j = i+1; j <=len; j++) {
            ans.push(str.substring(i, j));
        }
    }
    return ans;
}

// console.log(func3("dog"));

/**
 * 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string
 */
var func4 = function alphabeticalOrder(str) {
    var bucket = new Array(26);
    console.log(bucket);
    var len = str.length;
    for (var i = 0; i < 26; i++) {
        bucket[i] = 0;
    }
    for (var i = 0; i < len; i++) {
        var idx = str.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0);
        
        bucket[idx] += 1;
    }
    console.log(bucket);
    var ans = "";
    for (var i = 0; i < 26; i++) {
        for (var j = 0; j < bucket[i]; j++)
            ans += String.fromCharCode('a'.charCodeAt(0) + i);
    }
    console.log(ans);
    return ans;
}
// console.log(func4("webmaster"));

/**
 * 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
 */
var func5 = function(str) {
    var ans = str;
    var len = str.length;
    var i = 0;
    var j = 0;
    do {
        while (i < len && str.charAt(i) == ' ') i++;
        if (i >= len) return ans;
        ans = ans.substring(0, i) + str.substring(i, i+1).toUpperCase() + ans.substring(i+1);
        // ans.replaceAt(i, str.substring(i, i+1).toUpperCase());
        j = i+1;
        while (j < len && str.charAt(j) != ' ') j++;
        if (j >= len) return ans;
        i = j + 1;
    } while (i < len);
    return ans;
}

// console.log(func5("the quick brown fox"));
/**
 *  Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Example string : 'Web Development Tutorial'
Expected Output : 'Development'
 */
function splitStrToWordList(str) {
    var len = str.length;
    var i = 0, j = 0;
    var ans = [];
    do {
        while (i < len && str.charAt(i) == ' ')i++;
        if (i >= len) break;
        j = i;
        while (j < len && str.charAt(j) != ' ')j++;
        ans.push(str.substring(i, j));
        i = j;
    }
    while (i < len);
    return ans;
}
var func6 = function(str) {
    var wordList = splitStrToWordList(str);
    console.log(wordList);
    var maxLen = 0;
    var ans = "";
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].length > maxLen) {
            ans = wordList[i];
            maxLen = wordList[i].length;
        }
    }
    return ans;
};
// console.log(func6("Web Development Tutorial"));

/**
 * 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
 * Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5
 */
var func7 = function(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var len = str.length;
    var ans = 0;
    for (let i = 0; i < len; i++) {
        if (vowels.includes(str.charAt(i))) {
            // console.log(str.charAt(i));
            ans++;
        }
    }
    return ans;
}
console.log(func7("The quick brown fox"));
/**
test.value(val);
test.object(val);
test.string(val);
test.number(val);
 */
test.number(func7("The quick brown fox")).isEqualTo(5);

/**
 * 8.Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 */
var func8 = (num) => {
    if (num == 1) return false;
    for (let j = 3; j * j <= num; j+=2) {
        if (num % j === 0)  {
            return false;
           }
    }
    return true;
}

test.value(func8(15)).isEqualTo(false);
test.value(func8(9)).isEqualTo(false);
test.value(func8(11)).isEqualTo(true);

/**
 * 9. Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
 */

 var func9 = (arg) => {
    return typeof arg;
 }

 var a;
 test.string(typeof a).isEqualTo("undefined");
 a = 11;
 test.value(typeof a).isEqualTo("number");
 a = true;
 test.value(typeof a).isEqualTo("boolean");
 a = ()=>{console.log("hello world!")};
 test.string(typeof a).isEqualTo("function");

 /**
  * 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
  */

var func10 = (n)  => {
    var arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n);
    }
    for (let i = 0;i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                arr[i][j] = 1;
            } else {
                arr[i][j] = 0;
            }
        }
    }
    return arr;
}
var arr3d = func10(3);
test.number(arr3d[0][0]).isEqualTo(1);
test.number(arr3d[0][1]).isEqualTo(0);
test.number(arr3d[1][1]).isEqualTo(1);
test.number(arr3d[2][2]).isEqualTo(1);

/**
 * 11.Write a JavaScript function which will take an array of numbers stored and find the second 
 * lowest and second greatest numbers, respectively.
    Sample array : [1,2,3,4,5]
    Expected Output : 2,4
 */
// function partition(list, left, right, pivotIndex)
// pivotValue := list[pivotIndex]
// swap list[pivotIndex] and list[right]  // Move pivot to end
// storeIndex := left
// for i from left to right-1
//     if list[i] < pivotValue
//         swap list[storeIndex] and list[i]
//         increment storeIndex
// swap list[right] and list[storeIndex]  // Move pivot to its final place
// return storeIndex

  // Returns the k-th smallest element of list within left..right inclusive
  // (i.e. left <= k <= right).
//   function select(list, left, right, k)
//      if left = right        // If the list contains only one element,
//          return list[left]  // return that element
//      pivotIndex  := ...     // select a pivotIndex between left and right,
//                             // e.g., left + floor(rand() % (right - left + 1))
//      pivotIndex  := partition(list, left, right, pivotIndex)
//      // The pivot is in its final sorted position
//      if k = pivotIndex
//          return list[k]
//      else if k < pivotIndex
//          return select(list, left, pivotIndex - 1, k)
//      else
//          return select(list, pivotIndex + 1, right, k)



function kthSelect(arr, lo, hi, k) {
    var pivot = arr[hi];
    if (lo == hi) {
        return arr[lo];
    }
    var pivotIdx = partitionedIdx(arr, lo, hi, lo);
    if (k == pivotIdx) {
        return arr[k];
    } else if (k < pivotIdx) {
        return kthSelect(arr, lo, pivotIdx-1, k);
    } else {
        return kthSelect(arr, pivotIdx+1, hi, k);
    }
}

function swap(arr, idx1, idx2) {
    var temp =  arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function partition(arr, lo, hi, pivotIdx) {
    var pivotValue = arr[pivotIdx];
    swap(arr, pivotIdx, hi);
    var storeIdx = lo;
    for (let i = lo; i < hi; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, storeIdx);
            storeIdx++;
        }
    }
    console.log(storeIdx);
    swap(arr, storeIdx, hi);
    console.log(storeIdx);
    return storeIdx;
}
var myArr = [1,3,4,2,5];
// swap(myArr, 1,2);
console.log(myArr);
// test.array(myArr).is([1, 4, 3, 2, 5]);
var partitionedIdx = partition(myArr, 0, myArr.length-1, 1);
console.log("partitionedIdx: ", partitionedIdx);
test.number(partitionedIdx).is(2);
// test.value(myArr).isEqualTo([1,4,3,2,5]);

var func11 = (arr)=> {
}