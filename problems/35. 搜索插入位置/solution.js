/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const len = nums.length;
  let l = 0,
    r = len - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] === target) {
      return mid;
    }
  }
  return l;
};
