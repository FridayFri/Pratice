var isValid = function (s) {
  if (!s.length) return false;
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const res = [];
  for (let i = 0; i < s.length; i++) {
    const key = res[res.length - 1];
    if (obj[key] === s[i]) {
      res.pop();
    } else {
      res.push(s[i]);
    }
    console.log(res, key);
  }
  return res.length === 1;
};

console.log(isValid("()))"));
