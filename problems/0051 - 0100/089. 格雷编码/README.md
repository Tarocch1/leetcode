格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。

给定一个代表编码总位数的非负整数 *n*，打印其格雷编码序列。即使有多个不同答案，你也只需要返回其中一种。

格雷编码序列必须以 0 开头。

**示例 1:**

```
输入: 2
输出: [0,1,3,2]
解释:
00 - 0
01 - 1
11 - 3
10 - 2

对于给定的 n，其格雷编码序列并不唯一。
例如，[0,2,3,1] 也是一个有效的格雷编码序列。

00 - 0
10 - 2
11 - 3
01 - 1
```

**示例 2:**

```
输入: 0
输出: [0]
解释: 我们定义格雷编码序列必须以 0 开头。
     给定编码总位数为 n 的格雷编码序列，其长度为 2n。当 n = 0 时，长度为 20 = 1。
     因此，当 n = 0 时，其格雷编码序列为 [0]。
```

**思路:**

n 位格雷编码相当于 n - 1 位格雷编码的各位的二进制加上前导 1 之后，与 n - 1 位格雷编码排列组成。

因此可以使用递归的方法。n - 1 位格雷编码的各位的二进制加上前导 1 后，各位依然仅有一个位数的差异，因此，只要保证排列之后首尾两端也仅有一位差异即可，这里可以直接选择倒序排列，这样相当于 n - 1 位格雷数列的末位加上前导 1 排列在其后面，保证了仅相差一位。

n - 1 位格雷编码：00 01 11 10

n - 1 位格雷编码加前导 1: 100 101 111 110

倒序：110 111 101 100

排列得到 n 位格雷编码： 00 01 11 10 110 111 101 100
