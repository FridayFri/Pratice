var numWaterBottles = function (numBottles, numExchange) {
  let res = numBottles;
  let tem = numBottles;
  while (tem > numExchange) {
    const a = Math.floor(tem / numExchange);
    console.log(a);
    tem=tem-numExchange*a+a
    res += a;
  }
  return res;
};

const numBottles = 15,
  numExchange = 4;
console.log(numWaterBottles(numBottles, numExchange));
