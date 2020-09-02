给定一个非空字符串 *s* 和一个包含非空单词列表的字典 *wordDict*，判定 *s* 是否可以被空格拆分为一个或多个在字典中出现的单词。

**说明:**

- 拆分时可以重复使用字典中的单词。
- 你可以假设字典中没有重复的单词。

**示例 1:**

```
输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
```

**示例 2:**

```
输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
```

**示例 3:**

```
输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
```

**思路:**

动态规划，字符串的从 i 到 j 字符串能否被拆分取决于两种情况：

1. 该子字符串本身在字典中
2. 该子字符串可以被拆成能够被拆分的两部分

根据以上分析编写代码，从后向前遍历字符串，最终返回 `dp[0][s.length - 1]`。
