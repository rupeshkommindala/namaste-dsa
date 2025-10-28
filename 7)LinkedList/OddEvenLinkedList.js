// Odd Even Linked List (LC:328)

function oddEvenList(head) {
  if (!head || !head.next) {
    // if (head===null || head.next===null)
    return head;
  }
  let odd = head;
  let even = head.next;
  let evenStart = even; // even or head.next;
  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenStart;
  return head;
}
