/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let result = '';
  let i = 0;

  for (let letter of strs[0]) {
    if (strs.some(str => str.charAt(i) !== letter)) break;
    result += letter;
    i++;
  }

  return result;
};
