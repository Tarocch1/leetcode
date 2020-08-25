/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const len = nums.length;
  if (target === nums[0]) return 0;
  if (target === nums[len - 1]) return len - 1;
  // 目标是否在左半部分
  const onLeft = target > nums[0];
  // 初始值位于正中间
  let cur = Math.floor(len / 2);
  // 目标可能存在的上下限
  let min = 0,
    max = len - 1;
  let next;
  while (nums[cur] !== target) {
    if (target < nums[cur] && onLeft) {
      // 目标在左半部分并且比当前值小，那么一定在当前值左侧，更新上限，向左二分
      max = Math.min(max, cur);
      next = cur - Math.ceil((cur - min) / 2);
    } else if (target > nums[cur] && onLeft) {
      // 目标在左半部分并且比当前值大
      if (nums[cur] >= nums[0]) {
        // 当前值在左半部分，那么目标一定在当前值右侧，更新下限，向右二分
        min = Math.max(min, cur);
        next = cur + Math.ceil((max - cur) / 2);
      } else {
        // 当前值在右半部分，那么目标一定在当前值左侧，更新上限，向左二分
        max = Math.min(max, cur);
        next = cur - Math.ceil((cur - min) / 2);
      }
    } else if (target < nums[cur] && !onLeft) {
      // 目标在右半部分并且比当前值小
      if (nums[cur] >= nums[0]) {
        // 当前值在左半部分，那么目标一定在当前值右侧，更新下限，向右二分
        min = Math.max(min, cur);
        next = cur + Math.ceil((max - cur) / 2);
      } else {
        // 当前值在右半部分，那么目标一定在当前值左侧，更新上限，向左二分
        max = Math.min(max, cur);
        next = cur - Math.ceil((cur - min) / 2);
      }
    } else if (target > nums[cur] && !onLeft) {
      // 目标在右半部分并且比当前值小大，那么一定在当前值右侧，更新下限，向右二分
      min = Math.max(min, cur);
      next = cur + Math.ceil((max - cur) / 2);
    }
    if (next === cur || next === min || next === max) return -1;
    cur = next;
  }
  return cur;
};
