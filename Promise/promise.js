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
};
let promise = new Promise((resolve, reject) => {
  resolve(123);
});

promise
  .then((value) => {
    console.log("value1", value);
    // a.b = 2; // 这里存在语法错误
    return 456;
  })
  .then(
    (value) => {
      console.log("value2", value);
    },
    (reason) => {
      console.log("reason2", reason);
    }
  );

console.log(promise);
