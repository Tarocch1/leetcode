/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0,
    result = nums[0];
  for (let x of nums) {
    pre = Math.max(pre + x, x);
    result = Math.max(result, pre);
  }
  return result;
};
