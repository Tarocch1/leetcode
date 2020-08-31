/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const wordListMap = new Map();
  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const t = `${word.slice(0, i)}*${word.slice(i + 1)}`;
      if (wordListMap.has(t)) {
        wordListMap.get(t).push(word);
      } else {
        wordListMap.set(t, [word]);
      }
    }
  }
  const queue = [[beginWord, 1]],
    visited = new Map();
  visited.set(beginWord, true);
  while (queue.length > 0) {
    const [cur, level] = queue.shift();
    for (let i = 0; i < cur.length; i++) {
      const t = `${cur.slice(0, i)}*${cur.slice(i + 1)}`;
      if (wordListMap.has(t)) {
        for (let word of wordListMap.get(t)) {
          if (word === endWord) return level + 1;
          if (!visited.has(word)) {
            visited.set(word, true);
            queue.push([word, level + 1]);
          }
        }
      }
    }
  }
  return 0;
};
