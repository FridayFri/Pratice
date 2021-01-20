function matchStr(str) {
  const obj = {
    "(": ")",
    ")": "(",
    "[": "]",
    "]": "[",
    "{": "}",
    "}": "{",
  };
  const res = [];
  for (let i = 0; i < str.length; i++) {
    console.log(res);
    if (obj[res[res.length - 1]] === str[i]) {
      res.pop();
    } else {
      res.push(str[i]);
    }
  }
  return !res.length;
}

console.log(matchStr("([)]"));
