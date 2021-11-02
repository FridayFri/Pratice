var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const _s = s.split("").sort();
  const _t = t.split("").sort();
  for (let i = 0; i < _s.length; i++) {
    if (_s[i] !== _t[i]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
