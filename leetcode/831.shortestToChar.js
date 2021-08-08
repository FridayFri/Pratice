var shortestToChar = function (s, c) {
  // 存起来有c的索引
  const temp = [];
  // 结果
  const res = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      temp.push(i);
    }
  }
  for (let i = 0; i < s.length; i++) {
    let m = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < temp.length; j++) {
      m = Math.min(m, Math.abs(temp[j]-i));
    }
    res.push(m)
  }
  return res
};

console.log(shortestToChar((s = "loveleetcode"), (c = "e")));
