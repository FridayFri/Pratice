const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
function MyPromise(executor) {
    
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {};
MyPromise.prototype.catch = function (onRejected) {};
MyPromise.prototype.finally = function (fn) {};
MyPromise.prototype.done = function (fn) {};

MyPromise.all = function (promiseArr) {};

MyPromise.race = function (promiseArr) {};

MyPromise.resolve = function (value) {};

MyPromise.reject = function (reason) {};

MyPromise.stop = function () {};

// console.log(promise);
