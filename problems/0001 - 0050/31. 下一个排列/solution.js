/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length;
  for (let i = len - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      for (let j = len - 1; j >= i; j--) {
        if (nums[j] > nums[i - 1]) {
          [nums[j], nums[i - 1]] = [nums[i - 1], nums[j]];
          let left = i,
            right = len - 1;
          while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
          }
          return;
        }
      }
    }
  }
  nums.reverse();
  return;
};
