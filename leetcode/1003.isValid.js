var isValid = function (s) {
    console.log('111', s.includes("abc"))
  while (s.includes("abc")) {
    s = s.replace(/abc/, "");
  }
  return !s.length;
};

console.log(isValid("abcabcababcc"));
