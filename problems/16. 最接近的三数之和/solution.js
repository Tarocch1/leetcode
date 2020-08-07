/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  const len = nums.length;
  let result = Infinity;
  for (let i = 0; i < len - 2; i++) {
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(result - target)) result = sum;
      if (sum > target) right--;
      if (sum < target) left++;
      if (sum === target) return target;
    }
  }
  return result;
};
