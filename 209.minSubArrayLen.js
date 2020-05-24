var minSubArrayLen = function(s, nums) {
    const int_max = Number.MAX_SAFE_INTEGER
    var i = 0, sum = 0, ans = int_max
    for (var j = 0; j < nums.length; j++) {
        sum += nums[j]
        while (sum >= s) {
            ans = Math.min(ans, j - i + 1)
            sum -= nums[i++]
        }
    }
    return ans === int_max ? 0 : ans
}
var s = 3;
var nums = [1,1];
console.log(minSubArrayLen(s, nums));
