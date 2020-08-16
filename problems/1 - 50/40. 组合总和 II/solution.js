/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates = candidates.sort((a, b) => a - b);

  /**
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
  const search = (candidates, target) => {
    const len = candidates.length;
    const result = [];
    for (let i = 0; i < len; i++) {
      if (i > 0 && candidates[i] === candidates[i - 1]) continue;
      if (candidates[i] > target) break;
      if (candidates[i] === target) result.push([candidates[i]]);
      const r = search(candidates.slice(i + 1), target - candidates[i]);
      r.forEach(item => item.push(candidates[i]));
      result.push(...r);
    }
    return result;
  };

  const result = search(candidates, target);

  return result;
};
