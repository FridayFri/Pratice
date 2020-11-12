var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  s2 = s2.split("");
  for (const i of s1) {
    if (s2.indexOf(i) === -1) {
      return false;
    } else {
        console.log(s2)
      s2.splice(s2.indexOf(i), 1);
    }
  }
  return true;
};

console.log(CheckPermutation((s1 = "abc"), (s2 = "bac")));
