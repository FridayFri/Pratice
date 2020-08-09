// 贪心算法

var findContentChildren = function (g, s) {
  if (!g || !s) {
    return 0;
  }
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let sum = 0,
    n = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(g[n], s[i])
    if (n < g.length && g[n] <= s[i]) {
        console.log(g[n], s[i])
      sum++;
      n++;
    }
  }
  return sum;
};
const g = [10, 9, 8, 7],
  s = [5, 6, 7, 8];
console.log(findContentChildren(g, s));
