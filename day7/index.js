class MyPromise {
  constructor(callbackFn) {
    callbackFn(this.resolve.bind(this), () => {});

    //create thenCallbackQueue
    this.thenCallbackQueue = [];
    this.status = 'pending';
  }

  resolve(msg) {
    this.status = 'pending';
    this.data = msg;
    // console.log(msg);
    
    //get the callback from the queue
    //call the callback with msg argument
    while (this.thenCallbackQueue.length > 0) {
      let currCallback = this.thenCallbackQueue.shift();
      this.data = currCallback(this.data);
    }
  }

  then(thenCallbackFn) {
    //push the new Callback to the queue
    this.thenCallbackQueue.push(thenCallbackFn);
    return this;
  }
}

let p = new MyPromise((res, rej) => {
  setTimeout (() => {
    res("hello world!!");
  }, 1000);
});

p.then(data => {
  console.log(data);
  return 'data2';
}).then(data2 => {
  console.log(data2);
});

function getData() {
  let time = Math.random() * 10000;
  console.log(time);
  return new MyPromise((res, rej) => {
    setTimeout(() => {
      res(time);
    }, time);
  });
}


function MyAll(promiseArray) {
  let successCount = 0;
  let finalCount = promiseArray.length;
  let result = [];
  return new Promise((res, rej) => {
    promiseArray.forEach(promise => {
      promise.then(data => {
        result.push(data);
        successCount++;
        if (successCount === finalCount) {
          res(result);
        }
      });
    });
  });
}

MyAll([getData(), getData(), getData()]).then(function (val) {
  console.log(val);
});


//async //await