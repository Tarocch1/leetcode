/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let result = '1',
    i = 1;
  while (i < n) {
    let pre = '',
      temp = '',
      count = 0;
    for (let s of result) {
      if (s === pre) {
        count++;
      } else {
        if (count) temp += `${count}${pre}`;
        pre = s;
        count = 1;
      }
    }
    if (count) temp += `${count}${pre}`;
    result = temp;
    i++;
  }
  return result;
};
