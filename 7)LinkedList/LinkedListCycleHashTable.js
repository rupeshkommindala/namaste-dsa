// Linked List Cycle (LC:141)

// Brute Force Solution (TC:O(n), SC:O(n))
var hasCycle = function (head) {
  let seenNodes = new Set();
  let curr = head;
  while (curr) {
    if (seenNodes.has(curr)) {
      return true;
    } else {
      seenNodes.add(curr);
      curr = curr.next;
    }
  }
  return false;
};
