给定一个整数 *n*，求以 1 ... *n* 为节点组成的二叉搜索树有多少种？

**示例:**

```
输入: 3
输出: 5
解释:
给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

    1         3     3      2      1
     \       /     /      / \      \
      3     2     1      1   3      2
     /     /       \                 \
    2     1         2                 3
```

**思路:**

思路类似于[95. 不同的二叉搜索树 II](https://github.com/Tarocch1/leetcode/tree/master/problems/0051%20-%200100/095.%20%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%20II)。

在95题中由于必须要生成具体的树，所以 `generate(start, end)` 需要具体执行计算，但是在本题只要求计算树的数量。又注意到一下事实：

如果 `end - start = n - 1`，则 `generate(start, end)` 生成的树的数量与 `generate(1, n)` 相等。

因此本题可以使用动态规划，假设 `dp[n]` 表示 1 ... n 为节点组成的二叉搜索树的数量，则：

![](https://latex.codecogs.com/gif.latex?%5CLARGE%20dp%5Bn%5D%3D%5Csum_%7Bi%3D1%7D%5E%7Bn%7Ddp%5Bi-1%5Ddp%5Bn-i%5D)

初始条件:

- `dp[0] = 1`
- `dp[1] = 1`

由此编写代码即可。
