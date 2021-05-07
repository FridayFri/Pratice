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
      self.reason = reason;
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

MyPromise.prototype.then = function (onFuifilled, onRejected) {
  let self = this;

  if (self.state === PENDING) {
    self.onFulfilledCallbacks.push(() => {
      onFuifilled(self.value);
    });
    self.onRejectedCallbacks.push(() => {
      onRejected(self.reason);
    });
  }

  if (self.state === FULFILLED) {
    onFuifilled(self.value);
  }

  if (self.state === REJECTED) {
    onRejected(self.reason);
  }
};

let promise = new MyPromise(function(resolve, reject) {
  setTimeout(function() {
    resolve(123);
  }, 1000);
});

promise.then(function(value) {
  console.log('value1', value);
}, function(reason) {
  console.log('reason1', reason);
});

promise.then(function(value) {
  console.log('value2', value);
}, function(reason) {
  console.log('reason2', reason);
});

