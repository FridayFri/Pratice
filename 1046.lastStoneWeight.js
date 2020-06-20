var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    const a = stones.pop();
    const b = stones.pop();
    if (a - b !== 0) {
      stones.push(a - b);
      stones.sort((a, b) => a - b);
    }
  }
  return stones[0] || 0;
};

const stones = [2, 7, 4, 1, 8, 1];
console.log(lastStoneWeight(stones));
