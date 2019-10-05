function foo(num){
  return function (b){
    return function (c){
      return num*b*c
    }
  }
}
console.log(foo(4)(3)(2));