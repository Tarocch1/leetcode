/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  if (s.length === 0) return 0;
  let result = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) !== ' ') {
      result++;
    } else {
      break;
    }
  }
  return result;
};
