/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  let max = [0, 0];
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (num === max[0] || map.get(num) > max[1]) {
      max = [num, map.get(num)];
    }
  }
  return max[0];
};
