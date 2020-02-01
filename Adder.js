

function AntraAdd(...adder2){
    this.AntraValue = this.AntraValue==undefined? 0:this.AntraValue
    adder2.forEach(a=>{this.AntraValue += a;})
    return AntraAdd;
}
const handler = {
    set() {
        console.log(`result:${global.AntraValue}`)
        global.AntraValue = undefined;
      },
}
const res = new Proxy({}, handler);
res.a = AntraAdd(1,2)(2)(3,0)()();
res.a = AntraAdd()(0)(1,0)(3)();
res.a = AntraAdd(1,2,3,4)(1)()(2,3)();
res.a = AntraAdd()()()()()();




class AntraMath{
    constructor(val){
        this.accumulation = 0
    }
    add(adder){
        this.accumulation += adder;
        return myMath
    }
    multiple(mult){
        this.accumulation *= mult;
        return myMath
    }
    done(){
        return this.accumulation;
    }

}
let myMath = new AntraMath(10);
myMath.add(5);
myMath.multiple(2);
myMath.add(5).multiple(2);
let res2 = myMath.done();
console.log(res2);

