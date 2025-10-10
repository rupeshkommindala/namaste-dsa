// Linked List Cycle (LC:141)

function hasCycle(head) {
  let curr = head;
  let seenNodes = new Set();
  while (curr != null) {
    if (seenNodes.has(curr)) {
      return true;
    }
    seenNodes.add(curr);
    curr = curr.next;
  }
  return false;
}
