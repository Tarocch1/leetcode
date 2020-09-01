/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length;
  for (let i = 0; i < n; i++) {
    if (gas[i] >= cost[i]) {
      let g = gas[i] - cost[i],
        j = i === n - 1 ? 0 : i + 1;
      while (j !== i) {
        g += gas[j];
        g -= cost[j];
        if (g < 0) break;
        j = j === n - 1 ? 0 : j + 1;
      }
      if (g >= 0) return i;
    }
  }
  return -1;
};
