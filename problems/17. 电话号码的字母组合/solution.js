/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const result = recursion('', digits.split(''));
  return result;
};

const map = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

/**
 * @param {string} prefix
 * @param {string[]} rest
 * @return {string[]}
 */
const recursion = (prefix, rest) => {
  let result = [];
  if (rest.length > 1) {
    const num = rest[0];
    const newRest = rest.slice(1);
    map[num].forEach(letter => {
      result = result.concat(recursion(prefix + letter, newRest));
    });
  } else if (rest.length === 1) {
    const num = rest[0];
    result = map[num].map(letter => prefix + letter);
  }
  return result;
};
