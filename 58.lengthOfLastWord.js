var lengthOfLastWord = function(s) {
  if (s) {
    s = s.trim().split(" ");
    m = s[s.length - 1];
    if (s.length > 1) {
      return m.length;
    }
    return s[0].length;
  } else {
    return 0;
  }
};

var world = "a ";
console.log(lengthOfLastWord(world));
