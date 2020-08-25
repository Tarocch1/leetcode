/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const len = nums.length;
  let rightmost = 0;
  for (let i = 0; i < len; i++) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i]);
      if (rightmost >= len - 1) return true;
    } else {
      return false;
    }
  }
  return true;
};
