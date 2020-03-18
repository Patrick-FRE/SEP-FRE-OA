class MyPromise {
     constructor(callBackFn) {
          callBackFn(this.resolve.bind(this), (thenCallBackFn) => { })
          this.thenCallBackQueue = [];
          this.then = this.then.bind(this);
     }
     resolve(msg) {
          this.data = msg
          while (this.thenCallBackQueue.length > 0) {
               let curCallBack = this.thenCallBackQueue.shift();
               this.data = curCallBack(this.data)
          }
     }
     then(thenCallBackFn) {
          this.thenCallBackQueue.push(thenCallBackFn)
          return this;
     }
}

let p = new MyPromise((res, rej) => {
     setTimeout(() => {
          res("Hello Md");
     }, 1000)
})

p.then(d => {
     console.log(d);
     return "data2";
}).then(data2 => console.log(data2));

function getData() {
     let time = Math.random() * 10000;
     return new MyPromise((res, rej) => {
          setTimeout(() => {
               res(time)
          }, time);
     })
}

getData().then(data => console.log(data));
getData().then(data => console.log(data));
getData().then(data => console.log(data));

function MyAll(promiseArr) {
     let successCount = 0;
     let findCount = promiseArr.length;
     let result = [];

     return new Promise((res, rej) => {
          promiseArr.forEach(promise => {
               promise.then(() => successCount++;
               if (successCount === findCount) {
                    res(result)
               })
     })
})
}

MyAll([getData(), getData(), getData()]).then((data) => console.log("hello", data));

function lastOne() {
     console.log("Last");
}
