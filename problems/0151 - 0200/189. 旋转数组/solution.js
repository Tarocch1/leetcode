/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  let count = 0;
  for (start = 0; count < nums.length; start++) {
    let cur = start;
    let pre = nums[start];
    do {
      const next = (cur + k) % nums.length;
      const temp = nums[next];
      nums[next] = pre;
      pre = temp;
      cur = next;
      count++;
    } while (cur !== start);
  }
};
