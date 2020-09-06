/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  let a, b;
  for (let token of tokens) {
    switch (token) {
      case '+':
        b = stack.pop();
        a = stack.pop();
        stack.push(a + b);
        break;
      case '-':
        b = stack.pop();
        a = stack.pop();
        stack.push(a - b);
        break;
      case '*':
        b = stack.pop();
        a = stack.pop();
        stack.push(a * b);
        break;
      case '/':
        b = stack.pop();
        a = stack.pop();
        stack.push((a / b) | 0);
        break;
      default:
        stack.push(Number(token));
        break;
    }
  }
  return stack[0];
};
