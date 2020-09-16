/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (k < 0 || t < 0) return false;
  /**
   * @param {number} value
   * @return {number}
   */
  const getKey = value => {
    return Math.floor(value / (t + 1));
  };
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const key = getKey(nums[i]);
    if (map.has(key)) {
      return true;
    } else if (map.has(key + 1) || map.has(key - 1)) {
      if (map.get(key + 1) - nums[i] <= t) {
        return true;
      }
      if (nums[i] - map.get(key - 1) <= t) {
        return true;
      }
    }
    map.set(key, nums[i]);
    if (i >= k) {
      map.delete(getKey(nums[i - k]));
    }
  }
  return false;
};
