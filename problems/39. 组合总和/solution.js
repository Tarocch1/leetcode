/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
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
      if (candidates[i] > target) break;
      if (candidates[i] === target) result.push([candidates[i]]);
      const r = search(candidates.slice(i), target - candidates[i]);
      r.forEach(item => item.push(candidates[i]));
      result.push(...r);
    }
    return result;
  };

  const result = search(candidates, target);

  return result;
};
