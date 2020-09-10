实现一个二叉搜索树迭代器。你将使用二叉搜索树的根节点初始化迭代器。

调用 `next()` 将返回二叉搜索树中的下一个最小的数。

**示例:**

![](https://github.com/Tarocch1/leetcode/blob/master/problems/0151%20-%200200/173.%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E8%BF%AD%E4%BB%A3%E5%99%A8/assets/bst-tree.png)

```
BSTIterator iterator = new BSTIterator(root);
iterator.next();    // 返回 3
iterator.next();    // 返回 7
iterator.hasNext(); // 返回 true
iterator.next();    // 返回 9
iterator.hasNext(); // 返回 true
iterator.next();    // 返回 15
iterator.hasNext(); // 返回 true
iterator.next();    // 返回 20
iterator.hasNext(); // 返回 false
```

**提示:**

- `next()` 和 `hasNext()` 操作的时间复杂度是 O(1)，并使用 O(h) 内存，其中 h 是树的高度。
- 你可以假设 `next()` 调用总是有效的，也就是说，当调用 `next()` 时，BST 中至少存在一个下一个最小的数。

**思路:**

对二叉树的中序遍历。不同的是，我们不在一开始就遍历整棵树，而是在初始化时不断压栈遍历到最小值。当调用 `next()` 时，出栈得到下一个值，如果这个节点是叶子节点，说明它的再下一个值已经在栈中，不做任何操作；如果它还有右子树，继续遍历这颗右子树，直到其最小值，这样，保证栈顶永远是迭代的下一个值。

`hasNext()` 只需要判断栈是否为空，时间复杂度是 O(1)。`next()` 在理想情况下（叶子节点）时间复杂度是 O(1)，在其他情况下需要遍历树，在总体看来，需要遍历树的 N 个节点，总体时间复杂度是 O(N)，平均到每次操作，时间复杂度是 O(1)。
