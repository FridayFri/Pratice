var groupAnagrams = function (strs) {
  const res = new Map();
  for (let i = 0; i < strs.length; i++) {
    const temp = strs[i].split("").sort().join("");
    if (res.has(temp)) {
      res.get(temp).push(strs[i]);
    } else {
      res.set(temp, [strs[i]]);
    }
  }
  return [...res.values()]
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
