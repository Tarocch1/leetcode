给定一个字符串 `s`，找到 `s` 中最长的回文子串。你可以假设 `s` 的最大长度为 1000。

**示例 1:**

```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

**示例 2:**

```
输入: "cbbd"
输出: "bb"
```

**思路:**

对于回文字符串有以下结论：

- 在一个回文字符串两端加入相同的字符，得到的新字符串依然是回文字符串。
- 最基本的回文字符串包括单字符以及两个相同字符。

基于以上结论，我们从后向前遍历字符串，每遍历到一个字符 i，再从这个字符向后遍历，判断每次的子字符串 [i, j] 是否是回文字符串，之所以从后向前遍历，是因为判断 [i, j] 需要用到 [i + 1, j - 1] 的判断结果。
