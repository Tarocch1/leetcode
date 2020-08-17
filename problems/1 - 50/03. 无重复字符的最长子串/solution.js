/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  const window = [];
  let result = 0;

  for (let r = 0; r < len; r++) {
    const cur = s.charAt(r);
    while (window.includes(cur)) {
      window.shift();
      result = Math.max(result, window.length);
    }
    window.push(cur);
    result = Math.max(result, window.length);
  }
  return result;
};
