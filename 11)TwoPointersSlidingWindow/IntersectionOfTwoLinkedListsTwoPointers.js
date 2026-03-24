// Intersection of Two Linked Lists (LC:160)

// Optimized Solution (TC:O(m+n), SC:O(n))
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

// Optimized Solution (TC:O(m+n), SC:O(1))
var getIntersectionNode = function (headA, headB) {
  let n = 0;
  let pA = headA;
  while (pA) {
    n++;
    pA = pA.next;
  }
  let m = 0;
  let pB = headB;
  while (pB) {
    m++;
    pB = pB.next;
  }
  let diff = Math.abs(n - m);
  if (n > m) {
    let temp = headA;
    headA = headB;
    headB = temp;
  }
  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }
  pA = headA;
  pB = headB;
  while (pA !== pB) {
    pA = pA.next;
    pB = pB.next;
  }
  return pA;
};

// Optimized Solution (TC:O(m+n), SC:O(1))
var getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};
