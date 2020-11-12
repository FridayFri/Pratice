// var dailyTemperatures = function (T) {
//   const res = new Array(T.length).fill(0);
//   for (let i = 0; i < T.length; i++) {
//     for (let j = i + 1; j < T.length; j++) {
//       if (T[j] > T[i]) {
//         res[i] = j - i;
//         break;
//       }
//     }
//   }
//   return res
// };

var dailyTemperatures = function (T) {
  const res = new Array(T.length).fill(0);
  const stack = [];
  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length) {
      res[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return res;
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
