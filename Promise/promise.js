const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
function MyPromise(executor) {
  let self = this;
  // 状态机
  self.state = PENDING;
  self.value = null;
  self.reason = null;

  self.onFulfilledCallbacks = [];
  self.onRejectedCallbacks = [];

  function resolve(value) {
    if (self.state === PENDING) {
      self.state = FULFILLED;
      self.value = value;
      self.onFulfilledCallbacks.forEach(function (fulfilledCallback) {
        fulfilledCallback();
      });
    }
  }

  function reject(value) {
    if (self.state === PENDING) {
      self.state = REJECTED;
      self.reason = value;
      self.onRejectedCallbacks.forEach(function (rejectedCallback) {
        rejectedCallback();
      });
    }
  }

  try {
    executor(resolve, reject);
  } catch (reason) {
    reject(reason);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  let self = this;
  console.log(self)
  if (self.state === PENDING) {
    self.onFulfilledCallbacks.push(() => {
      onFulfilled(self.value);
    });
    self.onRejectedCallbacks.push(() => {
      onRejected(self.reason);
    });
  }
  if (self.state === FULFILLED) {
    onFulfilled(self.value);
  }

  if (self.state === REJECTED) {
    onRejected(self.reason);
  }
};
MyPromise.prototype.catch = function (onRejected) {};
MyPromise.prototype.finally = function (fn) {};
MyPromise.prototype.done = function (fn) {};

MyPromise.all = function (promiseArr) {};

MyPromise.race = function (promiseArr) {};

MyPromise.resolve = function (value) {};

MyPromise.reject = function (reason) {};

MyPromise.stop = function () {};

let promise = new MyPromise(function (resolve, reject) {
  setTimeout(function () {
    resolve(123);
  }, 1000);
});

promise.then(
  function (value) {
    console.log("value1", value);
  },
  function (reason) {
    console.log("reason1", reason);
  }
);

promise.then(
  function (value) {
    console.log("value2", value);
  },
  function (reason) {
    console.log("reason2", reason);
  }
);

// console.log(promise);
