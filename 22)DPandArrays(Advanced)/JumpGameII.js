var jump = function(nums) {
    let currEnd = farthest = jumps = 0;
    for(let i=0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if(i == currEnd) {
            currEnd = farthest;
            jumps++;
        }
    }
    return jumps;
};