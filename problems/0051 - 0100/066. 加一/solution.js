/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const len = digits.length;
  let carry = ((digits[len - 1] + 1) / 10) | 0;
  digits[len - 1] = (digits[len - 1] + 1) % 10;
  let i = len - 2;
  while (carry !== 0 && i >= 0) {
    const sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = (sum / 10) | 0;
    i--;
  }
  if (carry !== 0) digits.unshift(carry);
  return digits;
};
