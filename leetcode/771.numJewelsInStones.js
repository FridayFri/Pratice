
var numJewelsInStones = function(J, S) {
    let res = 0
    for(const item of S){
        if(J.includes(item)){
            res++
        }
    }
    return res 
};

console.log(numJewelsInStones(J = "aA", S = "aAAbbbb"))