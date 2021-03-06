给出集合 [1,2,3,…,*n*]，其所有元素共有 *n*! 种排列。

按大小顺序列出所有排列情况，并一一标记，当 *n* = 3 时, 所有排列如下：

1. `"123"`
2. `"132"`
3. `"213"`
4. `"231"`
5. `"312"`
6. `"321"`

给定 *n* 和 *k*，返回第 *k* 个排列。

**说明:**

- 给定 *n* 的范围是 [1, 9]。
- 给定 *k* 的范围是 [1, *n*!]。

**示例 1:**

```
输入: n = 3, k = 3
输出: "213"
```

**示例 2:**

```
输入: n = 4, k = 9
输出: "2314"
```

**思路:**

假设 n = 6，k = 373

初始化数组 nums = [1, 2, 3, 4, 5, 6]

由于 1 开头的组合有 5! 个，2 开头的组合也有 5! 个，因此：

1. k = 373，组合第一个数为 nums[Math.ceil(k / 5!) - 1] = 4；
2. nums 删掉 4，此时，nums = [1, 2, 3, 5, 6]，k = k % 5! = 13；
3. 之后从新的 nums 中寻找第 k 个排列，重复上面两步；
4. 当 k = 0 时，由于 k 通过 `k %= factor` 计算得来，出现 0 说明寻找的是某一个数开头时最大的数，即剩下的数以最大方式排列（倒序排列）的数，此时，将 nums 中剩余的数字反向并加到结果最后即可。
