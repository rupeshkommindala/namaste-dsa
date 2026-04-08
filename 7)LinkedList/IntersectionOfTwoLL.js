// Intersection of Two Linked Lists (LC:160)

// Brute Force Solution (TC:O(m*n), SC:O(1))
var getIntersectionNode = function (headA, headB) {
  let curr1 = headA;
  while (curr1) {
    let curr2 = headB;
    while (curr2) {
      if (curr1 === curr2) {
        return curr1;
      }
      curr2 = curr2.next;
    }
    curr1 = curr1.next;
  }
  return null;
};

// Optimized Solution (TC:O(n+m), SC:O(n))
var getIntersectionNode = function (headA, headB) {
  let store = new Set();
  while (headB) {
    store.add(headB);
    headB = headB.next;
  }
  while (headA) {
    if (store.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }
  return null;
};
