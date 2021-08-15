function numFormat(num) {
  num = num.toString().split(".");
  const arr = num[0].split("").reverse();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      res.push(",");
    }
    res.push(arr[i]);
  }
  res.reverse();
  res = res.join("");
  if (num[1]) {
    res += "." + num[1];
  }
  return res
}

console.log(numFormat(123456789.123));
