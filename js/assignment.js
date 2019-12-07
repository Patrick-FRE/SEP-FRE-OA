function q1(num) {
    let res = 0;
    while (num > 0) {
        res = res * 10 + (num % 10);
        num = Math.floor(num / 10);
        console.log(num);
    }
    return res;
}
function test1(input) {
    console.log('input is:', input, ', out put is:', q1(input))
}
test1(12300)

function q2(input) {
    let start = 0;
    let end = input.length - 1;
    while (start < end) {
        if (input.charAt(start) != input.charAt(end)) {
            return false
        }
        else {
            start++;
            end--;
        }
    }
    return true
}
function test2(input) {
    console.log('input is:', input, ', out put is:', q2(input))
}
test2('heaeh');//true
test2('abcde');//false
test2('1234321');//true

class Q3 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = [];
        for (let i = 0; i < this.input.length; i++) {
            for (let j = i + 1; j <= this.input.length; j++) {
                this.output.push(this.input.substring(i, j));
            }
        }
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 3:')
q3 = new Q3();
q3.test('dogs')

class Q4 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = this.input.split('').sort().join('');
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 4:')
q4 = new Q4();
q4.test('edcab');

class Q5 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        let list = this.input.split(' ');
        for (let i = 0; i < list.length; i++) {
            list[i] = list[i].charAt(0).toUpperCase() + list[i].slice(1)
        }
        // list.forEach(item => {            
        //     item.charAt(0).toUpperCase() + item.slice(1) 
        // });
        this.output = list.join(' ')
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 5:')
q5 = new Q5();
q5.test('hello world i love you!');

class Q6 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        let maxLen = 0;
        let maxLenStr;
        let list = this.input.split(' ');
        list.forEach(item => {
            if (item.length > maxLen) {
                maxLenStr = item;
            }
        });
        this.output = maxLenStr;
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 6:')
q6 = new Q6()
q6.test('Hello world? who are you?????');

class Q7 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = 0;
        let vowels = ['a', 'e', 'i', 'o', 'u']
        for (let i = 0; i < this.input.length; i++) {
            vowels.forEach(item => {
                if (item === this.input[i].toLowerCase()) {
                    this.output += 1;
                }
            })
        }
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 7:')
q7 = new Q7();
q7.test('A, i love u.');
q7.test('a');
q7.test('aei');

class Q8 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        for (let i = 2; i <= Math.sqrt(this.input); i++) {
            if (this.input % i === 0) {
                this.output = false;
                return
            }
        }
        this.output = true
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 8:')
q8 = new Q8();
q8.test(101)
q8.test(100)

class Q9 {
    constructor(input) {
        this.input = input;
        this.output;
    }
    exec() {
        this.output = typeof (this.input);
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 9:')
q9 = new Q9();
let q9undefine;
q9.test({ name: 'syndra' });
q9.test(q9undefine);
q9.test(false);
q9.test(function () { return 1 });
q9.test(1);
q9.test('hello');

class Q10 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = []
        for (let i = 0; i < this.input; i++) {
            this.output.push([]);
            for (let j = 0; j < this.input; j++) {
                this.output[this.output.length - 1].push(1);
            }
        }
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 10:')
q10 = new Q10();
q10.test(6);
q10.test(5);

class Q11 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = []
        let max_num = -Number.MAX_VALUE;
        let sec_max_num = -Number.MAX_VALUE;
        let min_num = Number.MAX_VALUE;
        let sec_min_num = Number.MAX_VALUE;
        for (let i = 0; i < this.input.length; i++) {
            if (this.input[i] > max_num) {
                sec_max_num = max_num
                max_num = this.input[i]
            }
            else if (this.input[i] > sec_max_num && this.input[i] <= max_num) {
                sec_max_num = this.input[i];
            }

            if (this.input[i] < min_num) {
                sec_min_num = min_num
                min_num = this.input[i];
            }
            else if (this.input[i] >= min_num && this.input[i] < sec_min_num) {
                sec_min_num = this.input[i];
            }
            // console.log(max_num, sec_max_num, sec_min_num, min_num)
        }
        this.output.push(sec_min_num);
        this.output.push(sec_max_num);
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 11:')
q11 = new Q11()
q11.test([5, 8, 9, 7, 6, 3, 4, 2])
q11.test([1, 2, 3, 4, 3, 2, 1])
q11.test([-1, -3, -8, -5, -2])


class Q12 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = undefined;
        let divisors = 0
        for (let i = 1; i <= this.input / 2; i++) {
            if (this.input % i == 0) {
                divisors += i
            }
        }
        if (divisors === this.input) {
            this.output = true;
        } else {
            this.output = false;
        }
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 12:')
q12 = new Q12()
q12.test(28)
q12.test(29)


class Q13 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = undefined;
        let factors = []
        for (let i = 2; i <= Math.sqrt(this.input); i++) {
            if (this.input % i == 0) {
                factors.push(i)
                factors.push(this.input / i)
            }
        }
        this.output = factors
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 13:')
q13 = new Q13()
q13.test(13)
q13.test(14)


class Q14 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = [];
        this.input.coins.sort((a, b) => b - a);
        let amount = this.input.amount;
        let coins = this.input.coins;
        for (let i = 0; i < coins.length; i++) {
            if (amount >= coins[i]) {
                let num_coin = Math.floor(amount / coins[i])
                for (let n = 0; n < num_coin; n++) {
                    this.output.push(coins[i])
                }
                amount %= coins[i]
                // console.log(coins[i],amount)
                if (amount === 0) {
                    return
                }
            }

        }
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 14:')
q14 = new Q14()
q14.test({ amount: 46, coins: [25, 10, 5, 2, 1] })
q14.test({ amount: 47, coins: [25, 10, 5, 2, 1] })
q14.test({ amount: 50, coins: [25, 10, 5, 2, 1] })
q14.test({ amount: 51, coins: [25, 10, 5, 2, 1] })


class Q15 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = 1;
        let b = this.input.b;
        let n = this.input.n;
        for (let i = 0; i < n; i++) {
            this.output *= b;
        }
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 15:')
// b is base, n is exponent
q15 = new Q15()
q15.test({ b: 3, n: 4 })

class Q16 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = '';
        for (let i = 0; i < this.input.length; i++) {
            if (!this.output.includes(this.input.charAt(i))) {
                this.output += this.input.charAt(i);
            }
        }
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 16:')
q16 = new Q16()
q16.test('hello,world,')

class Q17 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = {};
        for (let i = 0; i < this.input.length; i++) {
            if (typeof (this.output[this.input.charAt(i)]) == 'undefined') {
                this.output[this.input.charAt(i)] = 1
            } else {
                this.output[this.input.charAt(i)] += 1
            }
        }
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question :')
q17 = new Q17()
q17.test('abcdabcdefg')

class Q18 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = undefined;
        this.input.nums.sort((a, b) => a - b)
        let start = 0;
        let end = this.input.nums.length;
        let nums = this.input.nums
        let target = this.input.target
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            if (nums[mid] == target) {
                this.output = true;
                return
            }
            else if (nums[mid] > target) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        this.output = false;
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 18:')
q18 = new Q18()
q18.test({ nums: [1, 3, 4, 6, 3, 2], target: 3 })
q18.test({ nums: [1, 3, 4, 6, 3, 2], target: 10 })

class Q19 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = [];
        let nums = this.input.nums
        let target = this.input.target
        nums.forEach(ele => {
            if (ele > target) {
                this.output.push(ele)
            }
        })
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question :')
q19 = new Q19()
q19.test({ nums: [1, 2, 3, 4, 5, 6, 9, 8, 3, 2, 1,], target: 0 })
q19.test({ nums: [1, 2, 3, 4, 5, 6, 9, 8, 3, 2, 1,], target: 4 })
q19.test({ nums: [1, 2, 3, 4, 5, 6, 9, 8, 3, 2, 1,], target: 9 })

class Q20 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*~`-=+_()[]{}'
        this.output = '';
        for (let i = 0; i < this.input; i++) {
            this.output += chars.charAt(Math.floor(Math.random() * chars.length))
        }
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 20:')
q20 = new Q20()
q20.test(15)
q20.test(15)
q20.test(5)
q20.test(5)

class Q21 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = undefined;
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 21:')
q21 = new Q21()


class Q22 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = 0;
        let strs = this.input.strs
        let target = this.input.target
        for (let i = 0; i < strs.length; i++) {
            if (strs.charAt(i) == target) {
                this.output += 1;
            }
        }
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 22:')
q22 = new Q22()
q22.test({ strs: 'hello,world', target: 'l' })
q22.test({ strs: 'hello,world', target: ',' })
q22.test({ strs: 'hello,world', target: 'o' })

class Q23 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = '';
        for (let i = 0; i < this.input.length; i++) {
            let c = this.input.charAt(i);
            if (this.input.indexOf(c) && this.input.indexOf(c, i + 1) == -1) {
                this.output = c;
                return
            }
        }
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 23:')
q23 = new Q23()
q23.test('abcabeabf')

class Q24 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        console.log('input is:', this.input)
        this.output = undefined;
        for (let i = 0; i < this.input.length; i++) {
            for (let j = i; j < this.input.length; j++) {
                if (this.input[i] < this.input[j]) {
                    let tmp = this.input[i];
                    this.input[i] = this.input[j];
                    this.input[j] = tmp;
                }
            }
        }
        this.output = this.input;
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 24:')
q24 = new Q24()
q24.test([2, 3, 5, 9, 4, 7, 1]);

class Q25 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = undefined;
        let idx = undefined;
        let max_len = 0;
        this.input.forEach((item, index) => {
            if (item.length > max_len) {
                max_len = item.length;
                idx = index;
            }
        })
        this.output = this.input[idx];
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 25:')
q25 = new Q25()
q25.test(['china', 'unite state', 'english', 'scoland', 'ancient china'])

class Q26 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = undefined;
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 26:')
q26 = new Q26()

class Q27 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = undefined;
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question :')
q27 = new Q27()

class Q28 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = undefined;
        this.input('i am in callback')
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 28:')
q28 = new Q28()
q28.test(item=>console.log(item))

class Q29 {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output = undefined;
        this.output=this.input.name;
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question 29:')
q29 = new Q29()
q29.test(function foo(){})
