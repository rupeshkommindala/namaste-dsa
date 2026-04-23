function countingSortStable(arr, e) {
    let count = new Array(10).fill(0);
    
    for(let x of arr){
        let digit = Math.floor(x / e) % 10;
        count[digit]++;
    }
    
    for(let i = 1; i < count.length; i++) {
        count[i] = count[i] + count[i - 1];
    }
    
    let sortedArr = new Array(arr.length);
    for(let i = arr.length - 1; i >= 0; i--) {
        let curr = Math.floor(arr[i] / e) % 10;
        let x = count[curr];
        sortedArr[x-1] = arr[i];
        count[curr]--
    }
    // modify the original array
    for(let i = 0; i < arr.length; i++) {
        arr[i] = sortedArr[i]; 
    }
}

function radixSort(arr){
    let max = Math.max(...arr);
    
    for(let e = 1; Math.floor(max / e) > 0; e = e * 10){
        countingSortStable(arr, e);
    }
    return arr;
}
let nums = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(nums));