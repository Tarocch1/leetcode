/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const d = Array.from(new Array(numRows)).map(() => '');
  let y = -1;
  let yDirect = 1;
  for (let i = 0; i < s.length; i++) {
    if (y === 0) yDirect = 1;
    if (y === numRows - 1) yDirect = -1;
    y += yDirect;
    d[y] += s.charAt(i);
  }
  return d.join('');
};
