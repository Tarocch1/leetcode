/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const result = [];
  let r = '';
  for (let item of s) {
    if (item === ' ' && r !== '') {
      result.unshift(r);
      r = '';
    }
    if (item !== ' ') {
      r += item;
    }
  }
  if (r !== '') {
    result.unshift(r);
  }
  return result.join(' ');
};
