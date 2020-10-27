/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const stack = [];
  const seen = new Set();
  const lastOccur = new Map();
  for (let i = 0; i < s.length; i++) {
    lastOccur.set(s.charAt(i), i);
  }
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (!seen.has(c)) {
      while (
        stack.length > 0 &&
        c < stack[stack.length - 1] &&
        lastOccur.get(stack[stack.length - 1]) > i
      ) {
        seen.delete(stack.pop());
      }
      seen.add(c);
      stack.push(c);
    }
  }
  return stack.join('');
};
