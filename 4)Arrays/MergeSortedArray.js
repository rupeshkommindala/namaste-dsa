// Merge Sorted Array (LC:88)

// Optimized Solution (TC:O(m+n), SC:O(1))
var merge1 = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
let res1 = merge1(nums1, m, nums2, n);
console.log(res1);

// Better Approach (TC:O(m+n), SC:O(m))
var merge2 = function (nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
};

let arr1 = [1, 2, 3, 0, 0, 0];
let a = 3;
let arr2 = [2, 5, 6];
let b = 3;
let res2 = merge2(arr1, a, arr2, b);
console.log(res2);
