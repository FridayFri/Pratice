var findErrorNums = function (nums) {
    let sum = 0, dup = 0, less = 0;
    for(let i = 0; i < nums.length; i ++ ){
        less += nums[i];
        sum += i + 1;
        if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
            dup = nums[i];
        }
    }
    console.log(sum,less,dup)
    return [dup, sum - less + dup];
};

console.log(findErrorNums((nums = [1, 2, 2, 4])));
