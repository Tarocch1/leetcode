/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  if (citations.length === 0) return 0;
  citations.sort((a, b) => a - b);
  const len = citations.length;
  for (let i = 0; i < len; i++) {
    if (citations[i] >= len - i) {
      return len - i;
    }
  }
  return 0;
};
