/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let result = Infinity;
  if (nums.length > 0) {
    let left = 0,
      right = 0,
      sum = 0;
    while (right < nums.length) {
      sum += nums[right];
      while (sum >= s) {
        result = Math.min(result, right - left + 1);
        sun -= nums[left];
        left++;
      }
      right++;
    }
  }
  return result === Infinity ? 0 : result;
};
