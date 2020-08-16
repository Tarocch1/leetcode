/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const len = nums.length;
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  const leftBound = (nums, target) => {
    let l = 0,
      r = len - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (nums[mid] < target) {
        l = mid + 1;
      } else if (nums[mid] > target) {
        r = mid - 1;
      } else if (nums[mid] === target) {
        r = mid - 1;
      }
    }
    if (l >= len || nums[l] !== target) return -1;
    return l;
  };
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  const rightBound = (nums, target) => {
    let l = 0,
      r = len - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (nums[mid] < target) {
        l = mid + 1;
      } else if (nums[mid] > target) {
        r = mid - 1;
      } else if (nums[mid] === target) {
        l = mid + 1;
      }
    }
    if (r < 0 || nums[r] !== target) return -1;
    return r;
  };

  const l = leftBound(nums, target);
  if (l === -1) return [-1, -1];
  const r = rightBound(nums, target);
  return [l, r];
};
