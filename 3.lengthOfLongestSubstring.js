/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let array = [];
  let max = 0;
  for (let item of s) {
    if (array.includes(item)) {
      console.log("item", item);
      let index = array.indexOf(item);
      console.log('index',index);
      array.splice(0, index + 1);
      console.log(array.splice(0, index + 1))
    }
    array.push(item);
    console.log('max', max)
    max = max > array.length ? max : array.length;
  }
  return max;
};
console.log(lengthOfLongestSubstring("assdfdsafsafa"));
