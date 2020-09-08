/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split('.'),
    v2 = version2.split('.');
  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    const n1 = Number(v1[i]) || 0,
      n2 = Number(v2[i]) || 0;
    if (n1 > n2) {
      return 1;
    } else if (n1 < n2) {
      return -1;
    }
  }
  return 0;
};
