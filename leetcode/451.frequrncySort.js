var frequencySort = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const time = map.get(s[i]);
    if (map.has(s[i])) {
      map.set(s[i], time + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  const res = [...map];
  res.sort((a, b) => b[1] - a[1]);
  let str = ''
  for(let i = 0;i <res.length;i++){
      for(let j = 0;j< res[i][1];j++){
          str += res[i][0]
      }
  }
  return str
};

console.log(frequencySort("cccaaar"));
