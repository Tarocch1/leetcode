/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;

  if (len % 2 !== 0) return false;

  const map = {
    '(': -1,
    ')': 1,
    '[': -2,
    ']': 2,
    '{': -3,
    '}': 3,
  };
  const stack = [];

  for (let symbol of s) {
    if (map[symbol] < 0) {
      stack.push(map[symbol]);
    } else if (map[symbol] + stack[stack.length - 1] === 0) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
