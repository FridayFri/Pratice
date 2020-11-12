var subsets = function (nums) {
    let res = [[]]
    for(let i=0;i<nums.length;i++){
        let len = res.length
        console.log('res', res)
        for(let j=0;j<len;j++){
            let sub = res[j].slice()
            // console.log('sub', sub,'--', res[j])
            sub.push(nums[i])
            res.push(sub)
        }
    }
    return res
};

var nums = [1, 2, 3];
console.log(subsets(nums));
