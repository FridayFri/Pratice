var canPermutePalindrome = function (s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      delete obj[s[i]];
    } else {
      obj[s[i]] = 1;
    }
  }
  console.log(obj)
  return Object.keys(obj).length <= 1
};

console.log(canPermutePalindrome("tactcoa"));
