// Remove Nth Node From End of List (LC:19)

function removeNthFromEnd(head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }
  let prevPos = length - n;
  let prev = sentinel;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinel.next;
}
