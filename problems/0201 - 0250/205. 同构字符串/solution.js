/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = new Map();
  const hasMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const sl = s.charAt(i),
      tl = t.charAt(i);
    if (map.has(sl)) {
      if (map.get(sl) !== tl) return false;
    } else if (hasMap.has(tl)) {
      return false;
    } else {
      map.set(sl, tl);
      hasMap.set(tl, true);
    }
  }
  return true;
};
