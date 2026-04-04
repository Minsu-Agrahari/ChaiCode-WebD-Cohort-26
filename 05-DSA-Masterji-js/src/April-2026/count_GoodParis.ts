function countGoodPairs(nums: number[]): number {
    // nums: array of integers
    // Returns the number of good pairs

    let len = nums.length;

    let goodPair = 0;

    for (let i=0; i<len; i++) {
        for (let j=i+1; j<len; j++) {

            if(nums[i] === nums[j]){
                goodPair++;
            }
        }
    }
    
    return goodPair;
}

console.log(countGoodPairs([1, 2, 3, 1, 1, 3]));
console.log(countGoodPairs([1, 1, 1, 1]));
console.log(countGoodPairs([1, 2, 3]));