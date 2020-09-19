/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.replaceAll(' ', '');
  const signs = ['+', '-', '*', '/'];
  const stack = [];
  let num = 0,
    sign = '+';
  let result = 0;
  for (let i = 0; i <= s.length; i++) {
    const c = s.charAt(i);
    if (signs.includes(c) || i === s.length) {
      let pre;
      switch (sign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          pre = stack.pop();
          stack.push(pre * num);
          break;
        case '/':
          pre = stack.pop();
          stack.push(pre < 0 ? Math.ceil(pre / num) : Math.floor(pre / num));
          break;
      }
      sign = c;
      num = 0;
    } else {
      num = num * 10 + Number(c);
    }
  }
  return stack.reduce((acc, cur) => acc + cur, 0);
};
