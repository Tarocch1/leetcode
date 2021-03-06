假设你正在爬楼梯。需要 *n* 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意:** 给定 *n* 是一个正整数。

**示例 1:**

```
输入：2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```

**示例 2:**

```
输入：3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
```

**思路:**

典型的动态规划题目，用 `dp[n]` 表示到达第 n 个台阶的方法数，由于每次可以爬1 或 2 个台阶，则：

`dp[n] = dp[n - 1] + dp[n - 2]`

又有：

- `dp[0] = 1`
- `dp[1] = 1`

使用动态规划计算即可。
