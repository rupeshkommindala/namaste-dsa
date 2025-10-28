// Rotate List (LC:61)

function rotateRight(head, k) {
  if (!head || !head.next) return head;
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }
  k = k % length;
  let s = head;
  let f = head;
  for (let i = 0; i < k; i++) {
    f = f.next;
  }
  while (f.next) {
    s = s.next;
    f = f.next;
  }
  f.next = head;
  let newHead = s.next;
  s.next = null;
  return newHead;
}
