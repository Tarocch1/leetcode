/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  if (num.length < 3) return false;
  for (let i = 1; i < num.length; i++) {
    if (i > 1 && num[0] === '0') {
      break;
    }
    if (dfs(num, num.slice(0, i), i)) return true;
  }
  return false;
};

/**
 * @param {string} num
 * @param {string} last
 * @param {number} i
 * @return {boolean}
 */
const dfs = (num, last, i) => {
  let result = false;
  for (let j = i + 1; j < num.length; j++) {
    if (j > i + 1 && num[i] === '0') {
      break;
    }
    const cur = num.slice(i, j);
    const sum = add(last, cur);
    const next = j + sum.length;
    if (next > num.length) {
      break;
    }
    if (sum === num.slice(j, next)) {
      if (next === num.length) {
        return true;
      }
      result = dfs(num, cur, j);
    }
  }
  return result;
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const add = (a, b) => {
  let result = '';
  let na = a.length - 1,
    nb = b.length - 1;
  let carry = 0;
  while (na >= 0 || nb >= 0 || carry > 0) {
    const ta = na >= 0 ? Number(a[na--]) : 0;
    const tb = nb >= 0 ? Number(b[nb--]) : 0;
    const t = ta + tb + carry;
    result = `${t % 10}${result}`;
    carry = t >= 10 ? 1 : 0;
  }
  return result;
};
