/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this._nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this._nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const tempNums = [...this._nums];
  for (let i = 0; i < tempNums.length; i++) {
    const index = Math.floor(Math.random() * (tempNums.length));
    [tempNums[index], tempNums[i]] = [tempNums[i], tempNums[index]];
  }
  return tempNums
};

var obj = new Solution([1, 2, 3]);
var param_1 = obj.reset();
var param_2 = obj.shuffle();
console.log(param_1, param_2);
