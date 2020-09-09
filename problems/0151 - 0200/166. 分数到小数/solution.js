/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  const negative = (numerator > 0) ^ (denominator > 0) && numerator !== 0;
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  const map = new Map();
  let result = String(Math.floor(numerator / denominator));
  if (numerator % denominator !== 0) {
    result += '.';
    let rem = numerator % denominator;
    while (!map.has(rem) && rem !== 0) {
      map.set(rem, result.length);
      result += String(Math.floor((rem * 10) / denominator));
      rem = (rem * 10) % denominator;
    }
    if (rem !== 0) {
      result = `${result.slice(0, map.get(rem))}(${result.slice(
        map.get(rem),
      )})`;
    }
  }
  if (negative) result = `-${result}`;
  return result;
};
