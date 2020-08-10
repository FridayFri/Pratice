var minCostClimbingStairs = function (cost) {
    let temp = [cost[0], cost[1]]
    cost.push(0)
    let res = 0
    for(let i = 2; i<cost.length;i++){
       temp[i] = cost[i]+Math.min(temp[i-2], temp[i-1])
    }
    console.log(temp)
    return temp[cost.length-1]
};
const cost = [0, 0, 0, 1];
console.log(minCostClimbingStairs(cost));
