var removeDuplicates = function (S) {
  let stack = [];
  for (let i of S) {
    if (stack.length) {
      if (stack[stack.length - 1] === i) {
        stack.pop();
      } else {
        stack.push(i);
      }
    } else {
      stack.push(i);
    }
  }
  return stack.join("");
};
console.log(removeDuplicates("abbaca"));
