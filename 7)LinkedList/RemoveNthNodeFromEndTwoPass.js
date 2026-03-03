// Remove Nth Node From End of List (LC:19)

// Optimized Solution (TC:O(n), SC:O(1))
var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let length = 0;
  while (head) {
    length++;
    head = head.next;
  }
  let prevPos = length - n;
  let prev = sentinel;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinel.next;
};
