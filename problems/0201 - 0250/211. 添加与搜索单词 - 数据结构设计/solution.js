function TreeNode(leaf = false) {
  this.leaf = leaf;
  this.next = {};
}

/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.root = new TreeNode();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
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
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  if (word.length === 0) return false;
  /**
   * @param {TreeNode} root
   * @param {string} word
   * @return {boolean}
   */
  const search = function (root, word) {
    if (word.length === 0 && root.leaf) return true;
    const letter = word.charAt(0);
    if (letter === '.') {
      for (let l in root.next) {
        if (search(root.next[l], word.slice(1))) {
          return true;
        }
      }
      return false;
    } else {
      if (root.next[letter]) {
        return search(root.next[letter], word.slice(1));
      } else {
        return false;
      }
    }
  };
  return search(this.root, word);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
