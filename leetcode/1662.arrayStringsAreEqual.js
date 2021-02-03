var arrayStringsAreEqual = function (word1, word2) {
  let res1 = "";
  let res2 = "";
  for (let i of word1) {
    res1 += i;
  }
  for (let i of word2) {
    res2 += i;
  }
  return res1 === res2;
};

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
