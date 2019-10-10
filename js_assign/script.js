let quest_num = 0;

// question 1
function reverse_num(num) {
  return num.split('').reverse().join('');
}

quest_num++;
console.log(quest_num + '. ' + reverse_num('32243'));

// question 2
function check_palindrome(str) {
  for (let i = 0, j = str.length; i <= j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
}

quest_num++;
console.log(quest_num + '. ' + check_palindrome('nurses'));

// question 3
function gen_substr(str) {
  let array = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j <= str.length; j++) {
      array.push(str.substring(i, j));
    }
  }
  return array;
}

quest_num++;
console.log(quest_num + '. ' + gen_substr('dog'));

// question 4
function sort_str(str) {
  return str.split('').sort().join('');
}

quest_num++;
console.log(quest_num + '. ' + sort_str('webmaster'));

// question 5
function cap_str(str) {
  let ans = '';
  if (str.length > 0) {
    ans += str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
      if (str[i-1] === ' ') ans += str[i].toUpperCase();
      else ans += str[i];
    }
  }
  return ans;
}

quest_num++;
console.log(quest_num + '. ' + cap_str('the quick brown fox'));

// question 6
function find_longest(str) {
  const list = str.split(' ');

  let max = 0;
  let max_str = '';
  for (let i = 0; i < list.length; i++) {
    if (list[i].length > max) {
      max = list[i].length;
      max_str = list[i];
    }
  }

  return max_str;
}

quest_num++;
console.log(quest_num + '. ' + find_longest('Web Development Tutorial'));

// question 7
function cnt_vowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      cnt += 1;
    }
  }

  return cnt;
}

quest_num++;
console.log(quest_num + '. ' + cnt_vowel('The quick brown fox'));

// question 8
function is_prime(num) {
  if (num === 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % 2 === 0) return false;
  }

  return true;
}

quest_num++;
console.log(quest_num + '. ' + is_prime(2));

// question 9
function check_type(input) {
  return typeof input;
}

quest_num++;
console.log(quest_num + '. ' + check_type(null));

// question 10
function gen_matrix(n) {
  let multi_array = [];

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(++cnt);
    }
    multi_array.push(row);
  }

  return multi_array;
}

quest_num++;
console.log(quest_num + '. ' + gen_matrix(3));

// question 11
function find_second(array) {
  const sorted = array.sort();
  return [sorted[1], sorted[array.length-2]];
}

quest_num++;
console.log(quest_num + '. ' + find_second([1,2,3,4,5]));

// question 12
function is_perfect(num) {
  let divisors = [];
    
  if (num > 0) divisors.push(1);
  else return false;

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  let sum = 0;
  let all = 0;

  for (let i = 0; i < divisors.length; i++) {
    if (num !== divisors[i]) sum += divisors[i];
    all += divisors[i];
  }

  return sum === all/2;
}

quest_num++;
console.log(quest_num + '. ' + is_perfect(1));
console.log(quest_num + '. ' + is_perfect(2));
console.log(quest_num + '. ' + is_perfect(10));
console.log(quest_num + '. ' + is_perfect(50));
console.log(quest_num + '. ' + is_perfect(6));
console.log(quest_num + '. ' + is_perfect(28));
console.log(quest_num + '. ' + is_perfect(496));
console.log(quest_num + '. ' + is_perfect(8128));

// question 13
function comp_factors(num) {
  let factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }

  return factors;
}

quest_num++;
console.log(quest_num + '. ' + comp_factors(18));

// question 14
function cvt_coins(num, array) {
  const coins = [];

  array.sort(function(a, b){return b - a;});

  for (let item of array) {
    if (num >= item) {
      let amount = Math.floor(num / item);
      num -= amount * item;
      for (let i = 0; i < amount; i++) {
        coins.push(item);
      }
    }
  }

  return coins;
}

quest_num++;
console.log(quest_num + '. ' + cvt_coins(46, [25,10,5,2,1]));

// question 15
function exponent(b, n) {
  let ans = 1;
  for (let i = 0; i < n; i++) {
    ans *= b;
  }
  return ans;
}

quest_num++;
console.log(quest_num + '. ' + exponent(2, 10));

// question 16
function extract_uniq(str) {
  let uniq = new Set();

  for (let i = 0; i < str.length; i++) {
    uniq.add(str[i]);
  }

  return Array.from(uniq).join('');
}

quest_num++;
console.log(quest_num + '. ' + extract_uniq('thequickbrownfoxjumpsoverthelazydog'));

// question 17
function get_freq(str) {
  let dict = {};

  for (let i = 0; i < str.length; i++) {
    if (dict[str[i]])
      dict[str[i]]++;
    else
      dict[str[i]] = 1;
  }

  return dict;
}

quest_num++;
console.log(quest_num + '. ' + get_freq('thequickbrownfoxjumpsoverthelazydog'));

// question 18
function binary_search(array, li, ri, target) {
  if (ri >= 1) {
    let mid = Math.floor(li + (ri-1)/2);

    if (array[mid] === target) return mid;

    if (array[mid] > target) return binary_search(array, li, mid-1, target);
    if (array[mid] < target) return binary_search(array, mid+1, ri, target);
  } else {

    return -1;

  }
}

quest_num++;
console.log(quest_num + '. ' + binary_search([2,3,5,7,8,10,12,15,18,20], 0, 10, 7));

// question 19
function greater_elem(array, num) {
  let ans = [];

  for (let item of array) {
    if (item > num) ans.push(item);
  }

  return ans;
}

quest_num++;
console.log(quest_num + '. ' + greater_elem([29,5,17,13,23,2], 15));

// question 20
function rand_str(len) {
  const sample = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let ans = '';
  for (let i = 0; i < len; i++) {
    let rand = Math.floor(Math.random() * 62);
    ans += sample[rand];
  }

  return ans;
}

quest_num++;
console.log(quest_num + '. ' + rand_str(10));

// question 21
function gen_subsets(array, len) {
  // pass
}

quest_num++;
console.log(quest_num + '. ' + gen_subsets([1,2,3], 2));

// question 22
function cnt_occur(string, letter) {
  let cnt = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === letter) cnt++;
  }

  return cnt;
}

quest_num++;
console.log(quest_num + '. ' + cnt_occur('microsoft.com', 'o'));

// question 23
function find_norepeat(str) {
  let store = [];
  let ans = [];

  for (let i = 0; i < str.length; i++) {
    if (ans.includes(str[i])) {
      const index = ans.findIndex((element) => {
        return element === str[i];
      })
      ans.splice(index,1);
    } else {
      ans.push(str[i]);
    }
    store.push(str[i]);
  }

  return ans[0];
}

quest_num++;
console.log(quest_num + '. ' + find_norepeat('abacddbec'));

// question 24
function bubble_sort(array) {
  for (let i = 0; i < array.length-1; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

quest_num++;
console.log(quest_num + '. ' + bubble_sort([12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213]));

// question 25
function longest_country(array) {
  let max = 0;
  let max_country = '';
  for (let item of array) {
    if (item.length > max) {
      max = item.length;
      max_country = item;
    }
  }
  return max_country;
}

quest_num++;
console.log(quest_num + '. ' + longest_country(['Australia', 'Germany', 'United States of America']));

// question 26
function find_longest_substr(str) {

}

quest_num++;
console.log(quest_num + '. ' + find_longest_substr('abcabcbb'));

// question 27
function longest_palindrome() {

}

quest_num++;
console.log(quest_num + '. ' + find_longest_substr('abcabcbb'));

// question 28
function add(a) {
  return (b) => {
    return a + b;
  }
}

quest_num++;
console.log(quest_num + '. ' + add(1)(1));

// question 29
function get_name(func) {
  return func.name;
}

quest_num++;
console.log(quest_num + '. ' + get_name(add));


























