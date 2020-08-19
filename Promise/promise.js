const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
function MyPromise(executor) {
  let self = this;
  self.state = PENDING;
  self.value = null;
  self.reason = null;
  self.onFulfilledCallbacks = [];
  self.onRejectedCallbacks = [];
  function resolve(value) {
    if (self.state === "pending") {
      self.state = FULFILLED;
      self.value = value;
    }
    self.onFulfilledCallbacks.forEach(function (fulfilledCallbacks) {
      fulfilledCallbacks();
    });
  }

  function reject(reason) {
    if (self.state === "pending") {
      self.state = REJECTED;
      self.reason = reason;
    }
    self.onRejectedCallbacks.forEach(function (rejectedCallbacks) {
      rejectedCallbacks();
    });
  }

  try {
    executor(resolve, reject);
  } catch (reason) {
    reject(reason);
  }
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  let self = this;
  let promise2 = null;
  onFulfilled =
    typeof onFulfilled === "function"
      ? onFulfilled
      : (value) => {
          return value;
        };
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (reason) => {
          throw reason;
        };
  promise2 = new MyPromise((resolve, reject) => {
    if (self.state === PENDING) {
      self.onFulfilledCallbacks.push(() => {
        setTimeout(() => {
          try {
            let x = onFulfilled(self.value);
            self.resolvePromise(promise2, x, resolve, reject);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
      });
      self.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          try {
            let x = onRejected(self.reason);
            self.resolvePromise(promise2, x, resolve, reject);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
      });
    }
    if (self.state === FULFILLED) {
      setTimeout(() => {
        try {
          let x = onFulfilled(self.value);
          self.resolvePromise(promise2, x, resolve, reject);
        } catch (reason) {
          reject(reason);
        }
      }, 0);
    }
    if (self.state === REJECTED) {
      setTimeout(() => {
        try {
          let x = onRejected(self.value);
          self.resolvePromise(promise2, x, resolve, reject);
        } catch (reason) {
          reject(reason);
        }
      }, 0);
    }
  });
  if (self.state === "fulfilled") {
    self.onFulfilledCallbacks.push(() => {
      onFulfilled(self.value);
    });
  }
  if (self.state === "rejected") {
    self.onRejectedCallbacks.push(() => {
      onRejected(self.reason);
    });
  }
  return promise2;
};

MyPromise.prototype.resolvePromise = function (promise2, x, resolve, reject) {
  let self = this;
  let called = false; // called 防止多次调用

  if (promise2 === x) {
    return reject(new TypeError("循环引用"));
  }

  if (
    x !== null &&
    (Object.prototype.toString.call(x) === "[object Object]" ||
      Object.prototype.toString.call(x) === "[object Function]")
  ) {
    // x是对象或者函数
    try {
      let then = x.then;

      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            // 别人的Promise的then方法可能设置了getter等，使用called防止多次调用then方法
            if (called) return;
            called = true;
            // 成功值y有可能还是promise或者是具有then方法等，再次resolvePromise，直到成功值为基本类型或者非thenable
            self.resolvePromise(promise2, y, resolve, reject);
          },
          (reason) => {
            if (called) return;
            called = true;
            reject(reason);
          }
        );
      } else {
        if (called) return;
        called = true;
        resolve(x);
      }
    } catch (reason) {
      if (called) return;
      called = true;
      reject(reason);
    }
  } else {
    // x是普通值，直接resolve
    resolve(x);
  }
};
MyPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};
MyPromise.prototype.finally = function (fn) {
  return this.then(
    (value) => {
      fn();
      return value;
    },
    (reason) => {
      fn();
      throw reason;
    }
  );
};
MyPromise.prototype.done = function (fn) {
  this.catch((reason) => {
    console.log("done", reason);
    throw reason;
  });
};

MyPromise.all = function (promiseArr) {
  return new MyPromise((resolve, reject) => {
    let result = [];

    promiseArr.forEach((promise, index) => {
      promise.then((value) => {
        result[index] = value;

        if (result.length === promiseArr.length) {
          resolve(result);
        }
      }, reject);
    });
  });
};

MyPromise.race = function (promiseArr) {
  return new MyPromise((resolve, reject) => {
    promiseArr.forEach((promise, index) => {
      console.log("index", index);
      promise.then((value) => {
        resolve(value);
      }, reject);
    });
  });
};

let promise1 = new MyPromise((resolve, reject) => {
  console.log("aaaa");
  setTimeout(() => {
    resolve(1111);
    console.log(1111);
  }, 1000);
});

let promise2 = new MyPromise((resolve, reject) => {
  console.log("bbbb");
  setTimeout(() => {
    reject(2222);
    console.log(2222);
  }, 2000);
});

let promise3 = new MyPromise((resolve, reject) => {
  console.log("cccc");
  setTimeout(() => {
    resolve(3333);
    console.log(3333);
  }, 3000);
});

Promise.race([promise1, promise2, promise3]).then(
  (value) => {
    console.log("all value", value);
  },
  (reason) => {
    console.log("all reason", reason);
  }
);

// console.log(promise);
