/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = {};
  for (let l of s) {
    if (map[l]) {
      map[l]++;
    } else {
      map[l] = 1;
    }
  }
  for (let l of t) {
    if (map[l] !== undefined) {
      map[l]--;
      if (map[l] < 0) return false;
    } else {
      return false;
    }
  }
  return true;
};
