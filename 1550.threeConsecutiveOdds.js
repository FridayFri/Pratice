/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length - 3; i++) {
    if (arr[i] & 1 & (arr[i + 1] & 1) & (arr[i + 2] & 1)) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 34, 3, 4, 5, 7, 23, 12];
console.log(threeConsecutiveOdds(arr));
