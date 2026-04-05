/**
 * Problem: Number of Good Pairs
 * 
 * Description:
 * Given an array of integers, find the number of "good pairs".
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 * 
 * What the code does:
 * It uses two nested loops to check every possible pair of numbers in the array.
 * If two numbers match and the first index is smaller than the second, 
 * it counts as a good pair.
 * 
 * Example:
 * Input: [1, 2, 3, 1, 1, 3]
 * Output: 4
 * Explanation: There are 4 good pairs: (0,3), (0,4), (3,4), (2,5).
 */
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
