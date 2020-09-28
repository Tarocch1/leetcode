/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (input) {
  if (!isNaN(Number(input))) return [Number(input)];
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (['+', '-', '*'].includes(input.charAt(i))) {
      const left = diffWaysToCompute(input.slice(0, i));
      const right = diffWaysToCompute(input.slice(i + 1));
      for (let l of left) {
        for (let r of right) {
          switch (input.charAt(i)) {
            case '+':
              result.push(l + r);
              break;
            case '-':
              result.push(l - r);
              break;
            case '*':
              result.push(l * r);
              break;
            default:
              break;
          }
        }
      }
    }
  }
  return result;
};
