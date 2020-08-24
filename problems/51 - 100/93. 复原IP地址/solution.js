/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  /**
   * @param {string} s
   * @param {string[]} prefix
   * @return {string[][]}
   */
  const generate = function (s, prefix) {
    if (prefix.length === 4 && s.length > 0) return [];
    if (prefix.length === 4 && s.length === 0) return [prefix];
    if (s.startsWith('0')) {
      return generate(s.slice(1), prefix.concat([0]));
    }
    const result = [];
    for (let i = 0; i < Math.min(s.length, 3); i++) {
      const num = Number(s.slice(0, i + 1));
      if (num >= 1 && num <= 255) {
        result.push(...generate(s.slice(i + 1), prefix.concat([num])));
      }
    }
    return result;
  };

  return generate(s, []).map(item => item.join('.'));
};
