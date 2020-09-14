function TreeNode(leaf = false) {
  this.leaf = leaf;
  this.next = {};
}

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new TreeNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    if (cur.next[word.charAt(i)]) {
      if (i === word.length - 1) cur.next[word.charAt(i)].leaf = true;
      cur = cur.next[word.charAt(i)];
    } else {
      cur.next[word.charAt(i)] = new TreeNode(i === word.length - 1);
      cur = cur.next[word.charAt(i)];
    }
  }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    if (cur.next[word.charAt(i)]) {
      if (i === word.length - 1) return cur.next[word.charAt(i)].leaf;
      cur = cur.next[word.charAt(i)];
    } else {
      return false;
    }
  }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cur = this.root;
  for (let i = 0; i < prefix.length; i++) {
    if (cur.next[prefix.charAt(i)]) {
      if (i === prefix.length - 1) return true;
      cur = cur.next[prefix.charAt(i)];
    } else {
      return false;
    }
  }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
