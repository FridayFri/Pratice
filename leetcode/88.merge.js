/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var nums1 = [1, 2, 3, 0, 0, 0],
  m = 3;
var nums2 = [2, 5, 6],
  n = 3;
var merge = function(nums1, m, nums2, n) {
    nums2.map((item, index)=>{
        nums1[nums1.length-1-index] = item
    })
    nums1.sort((a,b)=>a-b)
};
merge(nums1,m,nums2,n)
console.log(nums1)