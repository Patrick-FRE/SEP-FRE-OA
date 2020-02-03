class AntraMath {
  constructor(num) {
    this.num = num;
  }
  add(num) {
    this.num += num;
    return this;
  }
  multiple(num) {
    this.num *= num;
    return this;
  }
  done() {
    return this.num;
  }
}
let myMath = new AntraMath(10);
myMath.add(5);
myMath.multiple(2);
myMath.add(5).multiple(2);
let res = myMath.done();
console.log(res);
