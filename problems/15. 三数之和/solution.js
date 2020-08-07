/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const len = nums.length;
  const result = [];
  for (let i = 0; i < len - 2 && nums[i] <= 0; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      if (left !== i + 1 && nums[left] === nums[left - 1]) {
        left++;
        continue;
      }
      while (nums[i] + nums[left] + nums[right] > 0 && left < right - 1) {
        right--;
      }
      if (nums[i] + nums[left] + nums[right] === 0) {
        result.push([nums[i], nums[left], nums[right]]);
      }
      left++;
    }
  }
  return result;
};
