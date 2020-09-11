/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const map = new Map();
  const rMap = new Map();
  const result = [];
  for (let i = 0; i <= s.length - 10; i++) {
    const sub = s.slice(i, i + 10);
    if (map.has(sub) && !rMap.has(sub)) {
      result.push(sub);
      rMap.set(sub, true);
    } else {
      map.set(sub, true);
    }
  }
  return result;
};
