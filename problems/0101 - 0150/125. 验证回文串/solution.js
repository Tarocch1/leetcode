/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  const reg = /[a-zA-Z0-9]/;
  let left = 0,
    right = s.length - 1;
  while (left <= right) {
    const l = s.charAt(left),
      r = s.charAt(right);
    if (!reg.test(l)) {
      left++;
    } else if (!reg.test(r)) {
      right--;
    } else if (l === r) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
