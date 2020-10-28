/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const bins = [];
  for (let word of words) {
    let bin = 0;
    for (let i = 0; i < word.length; i++) {
      const code = word.charCodeAt(i);
      bin |= 1 << (code - 97);
    }
    bins.push(bin);
  }
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if ((bins[i] & bins[j]) === 0) {
        result = Math.max(result, words[i].length * words[j].length);
      }
    }
  }
  return result;
};
