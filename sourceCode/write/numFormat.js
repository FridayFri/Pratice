function numFormat(num) {
  num = num.toString().split(".");
  const arr = num[0].split("").reverse();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      res.push(","); // 添加分隔符
    }
    res.push(arr[i]);
  }
  res = res.reverse();
  if (num[1]) {
    res = res.join("").concat("." + num[1]);
  } else {
    res = res.join("");
  }
  return res;
}

console.log(numFormat(123456789.123));
