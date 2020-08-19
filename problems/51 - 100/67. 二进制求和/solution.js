/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = '';
  const alen = a.length,
    blen = b.length;
  let carry = 0;
  for (let i = 1; i <= Math.max(alen, blen); i++) {
    const anum = i <= alen ? Number(a.charAt(alen - i)) : 0;
    const bnum = i <= blen ? Number(b.charAt(blen - i)) : 0;
    result = String((anum + bnum + carry) % 2) + result;
    carry = ((anum + bnum + carry) / 2) | 0;
  }
  if (carry > 0) {
    result = '1' + result;
  }
  return result;
};
