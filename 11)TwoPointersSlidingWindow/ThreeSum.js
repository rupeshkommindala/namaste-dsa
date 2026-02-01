// Two Sum (LC:1)

// Brute Force Solution (TC:O(n^2), SC:O(1))
var twoSum1 = function (arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};

let nums1 = [1, 3, 4, 2];
let res1 = twoSum1(nums1, 6);
console.log(res1);

// Optimized Solution (TC:O(n), SC:O(n))
var twoSum2 = function (arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    let pairToFind = target - arr[i];
    if (map[pairToFind] && map[pairToFind] != i) {
      return [i, map[pairToFind]];
    }
  }
};

let nums2 = [3, 2, 4];
let res2 = twoSum2(nums2, 6);
console.log(res2);


var findClosestElements = function(arr, k, x) {
    let l=0;
    let r=arr.length-k;
    while(l<r){
        let m=l+Math.floor((r-l)/2);
        if(arr[m+k]-x<x-arr[m]){
            l=m+1;
        }
        else{
            r=m;
        }
    }
    return arr.slice(l,l+k);
};