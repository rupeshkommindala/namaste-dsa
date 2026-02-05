// Middle of the Linked List (LC:876)

// (Way-1) Optimized Solution (TC:O(n), SC:O(1))
function middleNode(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// (Way-2) Optimized Solution (TC:O(n), SC:O(1))
function middleNode(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// (Way-3) Optimized Solution (TC:O(n), SC:O(1))
function middleNode(head) {
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
