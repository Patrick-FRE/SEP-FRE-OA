class MyPromise {
  constructor(callbackFn) {
    callbackFn(this.resolve.bind(this), () => {});

    //create thenCallbackQueue
    this.thenCallBackQueue = [];
  }
  resolve(msg) {
    this.data = msg;
    console.log(this);

    while (this.thenCallBackQueue.length > 0) {
      let ourCallBack = this.thenCallBackQueue.shift();
      this.data = ourCallBack(this.data);
    }
  }

  then(thenCallBackFn) {
    this.thenCallBackQueue.push(thenCallBackFn);
    return this;
  }
}

let p = new MyPromise((pat, rej) => {
  setTimeout(() => {
    pat("hello human");
  }, 1000);
});

p.then(data => {
  console.log(data);
  return "data2";
}).then(data2 => {
  console.log(data2);
});

function getData() {
  let time = Math.random() * 10000;
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(time);
    }, time);
  });
}

function MyAll(promiseArray) {
  let successCount = 0;
  let finalCount = promiseArray.length;
    let result = []
  return new Promise((res, rej) => {
    promiseArray.forEach(promise => {
      promise.then(data => {
          console.log(data);
          result.push(data);
          successCount++;
          if(successCount === finalCount) {
              res(result);
          }
      });
    });
  });
}

MyAll([getData(), getData(), getData()]).then(function(values) {
  console.log(values);
});

//async await
function lastOne() {
    console.log("last");
}

