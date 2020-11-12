var findDiff = function (s, t) {
  let res = t;
  for (let i = 0; i < s.length; i++) {
    if (t.indexOf(s[i]) !== -1) {
      res = res.replace(s[i], "");
    }
  }
  return res;
};
const s = "a",
  t = "aa";
console.log(findDiff(s, t));
