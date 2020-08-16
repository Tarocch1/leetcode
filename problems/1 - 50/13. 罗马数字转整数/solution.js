/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let preNum = 0;

  for (let letter of s) {
    const num = map[letter];
    if (preNum < num) {
      result -= preNum;
    } else {
      result += preNum;
    }
    preNum = num;
  }
  result += preNum;

  return result;
};
