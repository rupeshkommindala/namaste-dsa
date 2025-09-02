/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map={}
    for(let i=0;i<nums.length;i++){
        map[nums[i]]=i
    }
    for(let i=0;i<nums.length;i++){
        let pairToFind=target-nums[i];
        if(map[pairToFind] && i!=map[pairToFind]){
            return[i,map[pairToFind]]
        }
    }
};