/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let nums3 = [];
      for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) !== -1) {
          nums2.splice(nums2.indexOf(nums1[i]), 1);
          nums3.push(nums1[i]);
        }
      }
      return nums3;
    };
var nums1 = [1, 2, 2, 1],
  nums2 = [1, 2];
console.log(intersect(nums1, nums2));
