/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let cur = intervals[0];
  for (let interval of intervals) {
    if (interval[0] > cur[1]) {
      result.push(cur);
      cur = interval;
    } else {
      cur[1] = Math.max(cur[1], interval[1]);
    }
  }
  result.push(cur);
  return result;
};
