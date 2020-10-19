给定一个整数数组  nums，求出数组从索引 *i* 到 *j (i ≤ j)* 范围内元素的总和，包含 *i*，*j* 两点。

*update(i, val)* 函数可以通过将下标为 *i* 的数值更新为 *val*，从而对数列进行修改。

**示例:**

```
Given nums = [1, 3, 5]

sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8
```

**说明:**

- 数组仅可以在 *update* 函数下进行修改。
- 你可以假设 *update* 函数与 *sumRange* 函数的调用次数是均匀分布的。

**思路:**

思路类似于[303. 区域和检索 - 数组不可变](https://github.com/Tarocch1/leetcode/tree/master/problems/0301%20-%200350/303.%20%E5%8C%BA%E5%9F%9F%E5%92%8C%E6%A3%80%E7%B4%A2%20-%20%E6%95%B0%E7%BB%84%E4%B8%8D%E5%8F%AF%E5%8F%98)，在每次 `update` 时更新 `dp` 数组。
