// Reverse Linked List (LC:206)

// Optimized Solution (TC:O(n), SC:O(1))
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};
