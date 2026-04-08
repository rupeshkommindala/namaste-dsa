// Middle of the Linked List (LC:876)

// Optimized Solution (TC:O(n), SC:O(1))
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
