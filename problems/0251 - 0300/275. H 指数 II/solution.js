/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  if (citations.length === 0) return 0;
  const len = citations.length;
  let left = 0,
    right = len;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (citations[mid] < len - mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return len - left;
};
