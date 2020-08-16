/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    result = result.concat(
      threeSum(nums.slice(i + 1), target - nums[i], nums[i]),
    );
  }

  return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} cur
 * @return {number[][]}
 */
const threeSum = function (nums, target, cur) {
  const len = nums.length;
  const result = [];
  for (let i = 0; i < len - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      if (left !== i + 1 && nums[left] === nums[left - 1]) {
        left++;
        continue;
      }
      while (nums[i] + nums[left] + nums[right] > target && left < right - 1) {
        right--;
      }
      if (nums[i] + nums[left] + nums[right] === target) {
        result.push([nums[i], nums[left], nums[right], cur]);
      }
      left++;
    }
  }
  return result;
};
