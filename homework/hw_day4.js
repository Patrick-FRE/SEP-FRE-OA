function q1(num) {
    var str = num.toString();
    var split = str.split("");
    var reverseArray = split.reverse();
    var join = reverseArray.join("");
    var reverseNum = parseInt(join);
    return reverseNum;
}
// console.log(q1(34122) == 22143);
// console.log(typeof q1(34122) === "number");

function q2(str) {
    var len = str.length;
    for(var i = 0; i < Math.floor(len/2); i++) {
        if(str[i] != str[len-i-1]) return false;
    }
    return true;
}
// console.log(q2("madam") == true);
// console.log(q2("nurses") == false);
// console.log(q2("maam") == true);

function q3(str) {
    var substrings = new Array();
    var len = str.length;
    for(var i = 0; i < len; i++) {
        var substring = "";
        for(var j = i; j < len; j++) {
            substring += str[j];
            substrings.push(substring);
        }
    }
    console.log(substrings);
}
// q3("dog");
// q3("bird");

function q4(str) {
    var ordered = new Array();
    var freq = new Array(26).fill(0);
    var str2lower = str.toLowerCase();
    const a = "a";
    const offset = a.charCodeAt(0);
    for(var i = 0; i < str2lower.length; i++) {
        freq[str2lower[i].charCodeAt(0) - offset] += 1;
    }
    for(i = 0; i < 26; i++) {
        var char = String.fromCharCode(i+offset);
        while (freq[i] > 0) {
            ordered.push(char);
            freq[i] -= 1;
        }
    }
    return ordered.join("");
}
// console.log(q4("webmaster") === "abeemrstw");
// console.log(q4("alphabetical") === "aaabcehillpt");

function q5(str) {
    var converted = new Array();
    var words = str.split(" ");
    var word;
    for(var i = 0; i < words.length; i++) {
        word = words[i];
        converted.push(word[0].toUpperCase()+word.substr(1));
    }
    return converted.join(" ");
}
// console.log(q5("the quick brown fox") == "The Quick Brown Fox");
// console.log(q5("see You toMorrow") == "See You ToMorrow");

function q6(str) {
    var words = str.split(" ");
    var max = 0;
    var longestWord;
    words.forEach(function(word) {
        if(max < word.length) {
            longestWord = word;
            max = word.length;
        }
    });
    return longestWord;
}
// console.log(q6("Web Development Tutorial") == "Development");
// console.log(q6("longest this word") == "longest");

function q7(str) {
    var match = str.match(/[aeiou]/g);
    return match.length;
}
// console.log(q7("The quick brown fox") == 5);
// console.log(q7("eeeeee") == 6);
// console.log(q7("aeioui") == 6);

function q8(num) {
    if(num <= 1) return false;
    if(num == 2) return true;
    for(var factor = 2; factor <= num/factor; factor++) {
        if(num%factor == 0) return false;
    }
    return true;
}
// console.log(q8(16) === false);
// console.log(q8(37) === true);

function q9(arg) {
    return typeof arg;
}
// console.log(q9({name: "name"}));
// console.log(q9(true));
// console.log(q9(item=>item));
// console.log(q9(130));
// console.log(q9("test"));
// console.log(q9(undefined));
// var undefined_var;
// console.log(q9(undefined_var));

function q10(n) {
    var matrix = new Array(n);
    for(var i = 0; i < n; i++) {
        matrix[i] = new Array(n).fill(0);
        matrix[i][i] = 1;
    }
    return matrix;
}
// console.log(q10(0));
// console.log(q10(1));
// console.log(q10(3));

function q11(array) {
    array.sort(function(a,b){return a-b;});
    console.log(array[1], array[array.length-2]);
}
// q11([1,2,3,4,5]);
// q11([0,-13,3,100,50,70]);

function q12(num) {
    if(num <= 1) return false;
    var aliquotSum = 1;
    for(var divisor = 2; divisor <= num/divisor; divisor++) {
        if(num % divisor == 0) {
            aliquotSum += divisor + num/divisor;
        }
    }
    return num == aliquotSum;
}
// below should print 6,28,496,8128
// for(var n = 0; n <= 8219; n++) {
//     if(q12(n)) console.log(n);
// }

function q13(num) {
    var factors = new Array();
    for(var divisor = 1; divisor <= num/divisor; divisor++) {
        if(num % divisor == 0) {
            factors.push(divisor);
            if(divisor != num/divisor) factors.push(num/divisor);
        }
    }
    console.log(factors);
}
// q13(6);  // 1,6,2,3
// q13(28); // 1,28,2,14,4,7
// q13(36); // 1,36,2,18,3,12,4,9,6

function q14(amount, values) {
    var coins = new Array();
    values.sort(function(a,b){return b-a;}); // descending order
    for(var value of values) {
        if(amount == 0) break;
        while(amount >= value) {
            amount -= value;
            coins.push(value);
        }
    }
    console.log(coins);
}
// q14(46, [25,10,5,2,1]); // 25,10,10,1
// q14(7, [1]); // 1,1,1,1,1,1,1
// q14(208, [1,70,35,15,2]); // 70,70,35,15,15,2,1

function q15() { // assuming b != 0 and n >= 0
    var b = process.argv[2];
    var n = process.argv[3];
    var exponential = 1;
    for(var i = 0; i < n; i++) {
        exponential *= b;
    }
    console.log(exponential);
}
// q15();

function q16(str) {
    var uniqueSet = new Set();
    var unique = new Array();
    var char;
    for(var i = 0; i < str.length; i++) {
        char = str[i];
        if(!uniqueSet.has(char)) {
            unique.push(char);
            uniqueSet.add(char);
        }
    }
    return unique.join("");
}
// console.log(q16("thequickbrownfoxjumpsoverthelazydog") === "thequickbrownfxjmpsvlazydg");
// console.log(q16("1736783023") === "1736802");

function q17(str) {
    var map = new Map();
    var char;
    for(var i = 0; i < str.length; i++) {
        char = str[i];
        if(map.has(char)) map.set(char, map.get(char)+1);
        else map.set(char, 1);
    }
    return map;
}
// console.log(q17("thequickbrownfoxjumpsoverthelazydog"));

function q18(str, target) {
    if(str.length <= 1) return str === target;
    var len = str.length;
    var lenHalf = Math.floor(len/2);
    if(q18(str.substring(0, lenHalf), target)) return true;
    return q18(str.substring(lenHalf), target);
}
// console.log(q18("abcdef", "c") === true);
// console.log(q18("abcedfg", "l") === false);
// console.log(q18("a", "l") === false);
// console.log(q18("a", "a") === true);

function q19(array, threshold) {
    var larger = new Array();
    for(var elem of array) {
        if(elem > threshold) larger.push(elem);
    }
    console.log(larger);
}
// q19([123,5,2,64,90], 20);  // 123,64,90
// q19([123,5,2,64,90], 0);   // 123,5,2,64,90
// q19([123,5,2,64,90], 200); // nothing gets printed out

function q20(len) {  // charset is 128 ascii characters
    var str = new Array();
    var randomAscii; // random int in [0,128)
    for(var i = 0; i < len; i++) {
        randomAscii = Math.floor(Math.random()*128);
        str.push(String.fromCharCode(randomAscii));
    }
    var s = str.join("");
    if(s.length != len) console.log("Length Error!");
    console.log(s);
}
// q20(0);
// q20(5);
// q20(20);

// Note: doesn't work for arrays with duplicated elements
function q21(array, len) { // assuming valid inputs
    var subsets = new Array();
    if(len == 1) {
        for(var elem of array) {
            subsets.push([elem]);
        }
        return subsets;
    }
    if(array.length == len) return [array];
    
    var includeFirst = new Array();
    var excludeFirst = new Array();
    includeFirst = includeFirst.concat(q21(array.slice(1), len-1));
    for(var l of includeFirst) l.push(array[0]);
    excludeFirst = excludeFirst.concat(q21(array.slice(1), len));

    subsets = subsets.concat(includeFirst).concat(excludeFirst);
    return subsets;
}
// console.log(q21([1,2,3], 2)); // [[2,1], [3,1], [3,2]]
// console.log(q21([1,2,3,4], 3)); // [[1,2,3], [1,2,4], [1,3,4], [2,3,4]]
// console.log(q21([1,2,3,4], 2)); // [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]

function q22(str, char) {
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if(str[i] === char) count += 1;
    }
    return count;
}
// console.log(q22("microsoft.com", "o") === 3);
// console.log(q22("abcdeksffwas", "z") === 0);
// console.log(q22("ascsksffwas", "s") === 4);
// console.log(q22("_.._._.", "_") === 3);
// console.log(q22("_.._._.", ".") === 4);

function q23(str) {
    var freq = q17(str); 
    for(i = 0; i < str.length; i++) {
        if(freq.get(str[i]) == 1) return str[i];
    }
    return null;
}
// console.log(q23("abacddbec") === "e");
// console.log(q23("12348372910") === "4");
// console.log(q23("123456") === "1");
// console.log(q23("123123") === null);

function q24(array) {
    var swapped = true;
    var len = array.length;
    var i, curr, next;
    while(swapped) {
        swapped = false;
        for(i = 0; i < len-1; i++) {
            curr = array[i];
            next = array[i+1];
            if(curr > next) {
                array[i] = next;
                array[i+1] = curr;
                swapped = true;
            }
        }
    }
    console.log(array);
}
// q24([1,2,3,4,5]); // 1,2,3,4,5
// q24([5,4,3,2,1]); // 1,2,3,4,5
// q24([84,789,53,1,-234,2,-5,2,84]); // -234,-5,1,2,2,53,84,84,789

function q25(names) {
    var maxLen = 0;
    var longest = null;
    for(var name of names) {
        if(maxLen < name.length) {
            longest = name;
            maxLen = name.length;
        }
    }
    return longest;
}
// console.log(q25(["Australia", "Germany", "United States of America"]) === "United States of America");
// console.log(q25(["c1","c2","c3"]) === "c1");
// console.log(q25(["country", "countryy", "countryy","countryyy", "countryyyyy"]) === "countryyyyy");
// console.log(q25(["countryyyyyyyyyyy", "countryy", "countryy","countryyy", "countryyyyy"]) === "countryyyyyyyyyyy");

// If there are multiple longest substrings, choose the first one
function q26(str) {
// Find longest among all substrings without repeating characters that end with each character in string
    if(str.length == 0) return str;
    var start = 0;
    var longestLen = 1;
    var longestStart = 0;
    var longestEnd = 0;
    var lastOccurance = new Array(52).fill(-1);
    const a = "a";
    const offset = a.charCodeAt(0);

    var index, lastOccurIndex;
    for(var i = 1; i < str.length; i++) {
        index = str[i].charCodeAt(0) - offset;
        lastOccurIndex = lastOccurance[index];
        if(lastOccurIndex != -1 && start <= lastOccurIndex) {
            // need to start a new substring
            if(i-start > longestLen) {
                longestStart = start;
                longestEnd = i-1;
                longestLen = i-start;
            }
            start = lastOccurIndex+1;
        }
        else { // extend the current substring
            if(i-start+1 > longestLen) {
                longestStart = start;
                longestEnd = i;
                longestLen = i-start+1;
            }
        }
        lastOccurance[index] = i;
    }
    return str.substring(longestStart, longestEnd+1);
}
// console.log(q26("abcde") === "abcde");
// console.log(q26("abcdecmnoptlabdo") === "decmnoptlab");
// console.log(q26("abcdecxy") === "abcde");
// console.log(q26("abbaxyzxy") === "baxyz");

// If there are multiple longest substrings, choose the first one
function q27_longest_pal_centered_at(str, i, i) {
    var start = i;
    var end = i;
    while(start > 0 && end < str.length-1) {
        if(str[start-1] === str[end+1]) {
            start -= 1;
            end += 1;
        }
        else return [start, end];
    }
    return [start, end];
}
function q27(str) {
    if(str.length == 0) return str;
    var i = 0;
    var longestLen = 1;
    var longestStart = 0;
    var longestEnd = 0;
    var odd_center, even_center;
    var pal_len;
    for(i = 1; i < str.length-1; i++) {
        odd_center = q27_longest_pal_centered_at(str,i,i);
        pal_len = odd_center[1] - odd_center[0] + 1;
        if(pal_len > longestLen) {
            longestLen = pal_len;
            longestStart = odd_center[0];
            longestEnd = odd_center[1];
        }
        if(str[i] === str[i+1]) {
            even_center = q27_longest_pal_centered_at(str,i,i+1);
            pal_len = even_center[1] - even_center[0] + 1;
            if(pal_len > longestLen) {
                longestLen = pal_len;
                longestStart = even_center[0];
                longestEnd = even_center[1];
            }
        }
    }
    return str.substring(longestStart, longestEnd+1);
}
// console.log(q27("bananas") === "anana");
// console.log(q27("abracadabra") === "aca");
// console.log(q27("abcdefgh") === "a");
// console.log(q27("vbananabv") === "vbananabv");
// console.log(q27("cccceeeeeeec") == "ceeeeeeec");

function q28(func, parameter_func) {
    func(parameter_func);
}
// function foo(cb) {console.log(cb(20));}
// q28(foo, item=>item*2); // print 40
// function foo2(cb) {console.log(cb(4));}
// q28(foo2, item=>item+10); // print 14

function q29(func) {
    console.log(func.name);
}
// function myFuncName(){console.log("hello");}
// q29(myFuncName); // print myFuncName
// function myFuncName2(){console.log("hello");}
// q29(myFuncName2); // print myFuncName2