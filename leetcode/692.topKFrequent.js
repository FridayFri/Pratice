/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  words.sort();
  const map = new Map();
  for (let item of words) {
    const time = map.get(item) || 0;
    if (time) {
      map.set(item, time + 1);
    } else {
      map.set(item, 1);
    }
  }
  let res = [...map],
    result = [];
  res.sort((a, b) => b[1] - a[1]);
  console.log(res);
  for (let i = 0; i < k; i++) {
    result.push(res[i][0]);
  }
  return result;
};

const words = ["i", "love", "leetcode", "i", "love", "coding"],
  k = 3;
console.log(topKFrequent(words, k));
