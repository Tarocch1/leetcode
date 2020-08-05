/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let result = '';

  for (let m of map) {
    if (num === 0) break;
    if (num >= m[0]) {
      const n = (num / m[0]) | 0;
      num -= n * m[0];
      result += m[1].repeat(n);
    }
  }

  return result;
};
