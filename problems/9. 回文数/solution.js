/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x != 0)) {
    return false;
  }

  const num = x;
  let reverseNum = 0;
  while (x > 0) {
    const digit = x % 10;
    reverseNum = reverseNum * 10 + digit;
    x = (x / 10) | 0;
  }

  return num === reverseNum;
};
