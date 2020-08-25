/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  const len = needle.length;
  for (let i = 0; i < haystack.length - len + 1; i++) {
    if (haystack.slice(i, i + len) === needle) {
      return i;
    }
  }
  return -1;
};
