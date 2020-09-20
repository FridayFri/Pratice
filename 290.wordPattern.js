/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const list = s.split(" ");
  if (pattern.length != list.length) return false;
  for (let i = 0; i < list.length; i++) {
        console.log(pattern.indexOf(pattern[i]), pattern[i], list.indexOf(list[i]), list[i])
    if (pattern.indexOf(pattern[i]) !== list.indexOf(list[i])) {
      return false;
    }
  }
  return true;
};

const pattern = "abba",
  str = "dog cat cat dog";

console.log(wordPattern(pattern, str));
