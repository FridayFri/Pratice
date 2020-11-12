/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  this.obj = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  this.obj[key] = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  const keys = Object.keys(this.obj).filter((item) => {
    return item.indexOf(prefix) === 0;
  });
  return keys.reduce((acc, cur) => {
    acc += this.obj[cur];
    return acc;
  }, 0);
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

var obj = new MapSum();
obj.insert("apple", 3);
obj.insert("app", 2);
console.log(obj.sum('ap'));
