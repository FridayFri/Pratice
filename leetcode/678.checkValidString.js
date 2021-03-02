var checkValidString = function (s) {
  const stark = [],
    star = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stark.push(i);
    } else if (s[i] === "*") {
      star.push(i);
    } else if (s[i] === ")") {
      if (stark.length) {
        stark.pop();
      } else if (star.length) {
        star.pop();
      } else {
        return false;
      }
    }
  }
  while (stark.length && star.length) {
    let index1 = stark.pop();
    let index2 = star.pop();
    if (index1 > index2) {
      return false;
    }
  }
  return stark.length === 0 ? true : false;
};

console.log(checkValidString("(*))"));
