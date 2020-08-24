var printNumbers = function (n) {
  let temp = "";
  const res = [];
  for (let i = 0; i < n; i++) {
    temp += "9";
  }
  console.log(temp);
  for (let j = 1; j <= Number(temp); j++) {
    res.push(j);
  }
  return res;
};

console.log(printNumbers(4));
