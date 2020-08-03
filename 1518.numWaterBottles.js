var numWaterBottles = function (numBottles, numExchange) {
  let res = numBottles;
  while (numBottles >= numExchange) {
    numBottles -= numExchange - 1;
    console.log('numBottles', numBottles)
    res += 1;
  }
  return res;
};

const numBottles = 15,
  numExchange = 4;
console.log(numWaterBottles(numBottles, numExchange));
