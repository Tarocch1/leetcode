给定一个大小为 *n* 的数组，找出其中所有出现超过 `⌊ n/3 ⌋` 次的元素。

**说明:** 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。

**示例 1:**

```
输入: [3,2,3]
输出: [3]
```

**示例 2:**

```
输入: [1,1,1,3,3,2,2,2]
输出: [1,2]
```

**思路:**

参考[多数投票算法](https://zh.wikipedia.org/wiki/%E5%A4%9A%E6%95%B0%E6%8A%95%E7%A5%A8%E7%AE%97%E6%B3%95)，[两幅动画演示摩尔投票法，最直观的理解方式](https://leetcode-cn.com/problems/majority-element-ii/solution/liang-fu-dong-hua-yan-shi-mo-er-tou-piao-fa-zui-zh/)。
