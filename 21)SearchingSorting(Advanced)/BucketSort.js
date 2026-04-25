function bucketSort(arr) {
    let n = arr.length;
    
    let buckets = Array.from({ length: n}, () => []);
    
    for(let x of arr){
        let index = Math.floor(x * n)
        buckets[index].push(x);
    }
    
    for(let bucket of buckets){
        bucket.sort((a, b) => a - b);
    }
    let i = 0;
    for(let bucket of buckets) {
        for(let num of bucket) {
            arr[i++] = num;
        }
    }
    return arr;
}

 
const nums = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68]
console.log(bucketSort(nums));