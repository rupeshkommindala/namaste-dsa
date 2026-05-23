var KthLargest = function (k, nums) {
  this.heap = new MinPriorityQueue();
  this.k = k;
  for (let i = 0; i; this.k) {
    this.heap.dequeue();
  }
  return this.heap.front();
};
