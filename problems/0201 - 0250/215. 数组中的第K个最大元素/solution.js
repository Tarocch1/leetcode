/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  /**
   * @param {number[]} items
   * @param {number} i
   * @param {number} j
   * @return {void}
   */
  const swap = (items, i, j) => {
    [items[i], items[j]] = [items[j], items[i]];
  };
  /**
   * @param {number[]} items
   * @param {number} heapSize
   * @param {number} i
   * @return {void}
   */
  const heapify = (items, heapSize, i) => {
    while (true) {
      let minIndex = i;
      if (i * 2 <= heapSize && items[i] > items[i * 2]) {
        minIndex = i * 2;
      }
      if (i * 2 + 1 <= heapSize && items[minIndex] > items[i * 2 + 1]) {
        minIndex = i * 2 + 1;
      }
      if (minIndex === i) break;
      swap(items, i, minIndex);
      i = minIndex;
    }
  };
  /**
   * @param {number[]} items
   * @param {number} heapSize
   * @return {void}
   */
  const buildHeap = (items, heapSize) => {
    for (let i = Math.floor(heapSize / 2); i >= 1; i--) {
      heapify(items, heapSize, i);
    }
  };

  let heap = [,],
    i = 0;
  while (i < k) {
    heap.push(nums[i++]);
  }

  buildHeap(heap, k);

  for (let i = k; i < nums.length; i++) {
    if (heap[1] < nums[i]) {
      heap[1] = nums[i];
      heapify(heap, k, 1);
    }
  }

  return heap[1];
};
