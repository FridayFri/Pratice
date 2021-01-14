// 实现大数相加： add('294732947329847328947328947382', '11')  返回'294732947329847328947328947393'

function add(s, t) {
  s = BigInt(s);
  t = BigInt(t);
  return (s + t).toString();
}

function add1(a, b) {
  //取两个数字的最大长度
  let maxLength = Math.max(a.length, b.length);
  //用0去补齐长度
  a = a.padStart(maxLength, 0); //"294732947329847328947328947382"
  b = b.padStart(maxLength, 0); //"000000000000000000000000000011"
  let t = 0,
    f = 0,
    sum = "";
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseFloat(a[i]) + parseFloat(b[i]) + f;
    f = Math.floor(t / 10);
    sum = (t % 10) + sum;
    console.log(sum,f)
  }
  if (f == 1) {
    sum = "1" + sum;
  }
  return sum;
}

console.log(add1("294732947329847328947328947382", "21"));
