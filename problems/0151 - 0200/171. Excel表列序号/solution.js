/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result += (s.charCodeAt(s.length - 1 - i) - 64) * 26 ** i;
  }
  return result;
};
