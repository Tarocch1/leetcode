/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums = nums.map(n => String(n));
  nums.sort((a, b) => {
    const as = a + b,
      bs = b + a;
    const al = a.length,
      bl = b.length;
    for (let i = 0; i < al + bl; i++) {
      if (as.charCodeAt(i) < bs.charCodeAt(i)) {
        return 1;
      } else if (as.charCodeAt(i) > bs.charCodeAt(i)) {
        return -1;
      }
    }
    return 0;
  });
  if (nums[0].startsWith('0')) return '0';
  return nums.join('');
};
