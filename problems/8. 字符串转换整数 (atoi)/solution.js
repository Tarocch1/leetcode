/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  str = str.trim();
  let sign = 1;
  let result = 0;
  const nums = {};
  Array.from(new Array(10)).forEach((v, i) => (nums[i] = i));
  switch (str.charAt(0)) {
    case '+':
      sign = 1;
      str = str.slice(1);
      break;
    case '-':
      sign = -1;
      str = str.slice(1);
      break;
  }
  for (let i = 0; i < str.length; i++) {
    if (nums[str.charAt(i)] !== undefined) {
      result = result * 10 + sign * nums[str.charAt(i)];
    } else {
      break;
    }
  }
  return Math.max(Math.min(result, 2 ** 31 - 1), -(2 ** 31));
};
