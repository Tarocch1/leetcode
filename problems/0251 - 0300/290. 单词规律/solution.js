/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const pToS = new Map();
  const sToP = new Map();
  const array = s.split(' ');
  if (pattern.length !== array.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    const p = pattern.charAt(i);
    if (pToS.has(p)) {
      if (pToS.get(p) !== array[i]) {
        return false;
      }
    } else if (sToP.has(array[i])) {
      if (sToP.get(array[i]) !== p) {
        return false;
      }
    } else {
      pToS.set(p, array[i]);
      sToP.set(array[i], p);
    }
  }
  return true;
};
