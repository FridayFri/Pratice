var strStr = function(haystack, needle) {
  if (needle) {
    return haystack.indexOf(needle);
  }
  else return 0
};
var haystack = "hello";
var needle = "ll";
console.log(strStr(haystack, needle));
