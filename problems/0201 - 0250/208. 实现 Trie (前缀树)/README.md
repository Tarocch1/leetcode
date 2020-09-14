实现一个 Trie (前缀树)，包含 `insert`, `search`, 和 `startsWith` 这三个操作。

**示例:**

```
Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");
trie.search("app");     // 返回 true
```

**说明:**

- 你可以假设所有的输入都是由小写字母 `a-z` 构成的。
- 保证所有输入均为非空字符串。

**思路:**

维护一个树。插入单词时，遍历每一个字母，创建相应的节点，连接至树上，最后一个节点标记为叶子节点。搜索时，遍历每一个字母，如果中间遇到未创建的节点或者最后一个节点不是叶子节点，返回 false。查找前缀时，遍历每一个字母，如果中间遇到未创建的节点，返回 false。
