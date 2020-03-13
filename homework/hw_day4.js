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
    console.log(ordered.join(""));
}
// q4("webmaster");

function q5(str) {
    var converted = new Array();
    var words = str.split(" ");
    var word;
    for(var i = 0; i < words.length; i++) {
        word = words[i];
        converted.push(word[0].toUpperCase()+word.substr(1));
    }
    console.log(converted.join(" "));
}
// q5("the quick brown fox");

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
    console.log(longestWord);
}
// q6("Web Development Tutorial");

function q7(str) {
    var match = str.match(/[aeiou]/g);
    console.log(match.length);
}
// q7("The quick brown fox");
// q7("eeeeee");

function q8(num) {
    if(num <= 1) return false;
    if(num == 2) return true;
    for(var factor = 2; factor <= num/factor; factor++) {
        if(num%factor == 0) return true;
    }
    return false;
}
// console.log(q8(16));
// console.log(q8(37));

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
// q11([-13,0,3,100,50,70]);

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
// below should print 6,28,496,8218
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

// TODO: doesn't work for arrays with duplicated elements
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

function q26() {

}

function q27() {

}

function q28(func, parameter_func) {
    func(parameter_func);
}
function myFunc(cb) {
    var a = 20;
    console.log(cb(a));
}
// q28(myFunc, item=>item*2); // print 40

function q29(func) {
    console.log(func.name);
}
// function myFunc2(){}
// q29(myFunc2); // print myFunc2