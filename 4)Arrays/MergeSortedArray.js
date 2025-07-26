// Merge Sorted Array (LC:88)
// Brute Force Approach TC:O(m+n) SC:O(m)
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;
let p1 = 0;
let p2 = 0;
let nums1Copy = nums1.slice(0, m);
for (let i = 0; i < m + n; i++) {
  if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
    nums1[i] = nums1Copy[p1];
    p1++;
  } else {
    nums1[i] = nums2[p2];
    p2++;
  }
}
console.log(nums1);
