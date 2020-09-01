/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let one = 0,
    two = 0;
  for (const num of nums) {
    one = one ^ (num & ~two);
    two = two ^ (num & ~one);
  }
  return one;
};
