// Remove Nth Node From End of List (LC:19)

function removeNthFromEnd(head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let first = sentinel;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  let second = sentinel;
  while (first.next) {
    second = second.next;
    first = first.next;
  }
  second.next = second.next.next;
  return sentinel.next;
}
