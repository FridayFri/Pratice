var productExceptSelf = function (nums) {
    const answer = [];
    for (var i = 0; i < nums.length; i++) {
        answer[i] = nums.reduce(
            (a,b,index)=>{ 
                if(index === i){
                    return a
                }
                 return a*b
             }
        ,1)
    }
  return answer
};

console.log(productExceptSelf([0, 1]));
