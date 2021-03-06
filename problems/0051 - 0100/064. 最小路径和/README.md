给定一个包含非负整数的 *m* x *n* 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

**说明:** 每次只能向下或者向右移动一步。

**示例:**

```
输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。
```

**思路:**

采用动态规划，使用 `dp[i][j]` 表示到达 `[i][j]` 点的最小路径和，则：

`dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]`


又有 `dp[0][0] = grid[0][0]` ，则从上到下，从左到右遍历数组即可。
