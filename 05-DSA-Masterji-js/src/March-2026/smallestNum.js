"use strict";
/**
 * Problem: Count Smaller Numbers for Each Element
 * For each element in the array, count how many numbers are strictly smaller than it.
 *
 * Example:
 * Input: [8, 1, 2, 2, 3]
 * Output: [4, 0, 1, 1, 3]
 */
class SmallestNumSolution {
    /**
     * Counts how many numbers are smaller than each element in the array.
     * @param {number[]} nums - The input array of integers.
     * @returns {number[]} An array where each position i contains the count of numbers strictly smaller than nums[i].
     */
    countSmallerNumbers(nums) {
        let freq = new Array(10).fill(0);
        // Step 1: Count frequency
        for (let num of nums) {
            freq[num]++;
        }
        console.log(`freq aree --> ${freq}`);
        // steps 2: prefix sum (how many number are smaller)
        for (let i = 1; i < 10; i++) {
            freq[i] += freq[i - 1];
        }
        console.log(freq);
        // step 3: Build result
        let result = [];
        for (let num of nums) {
            if (num === 0) {
                result.push(0);
            }
            else {
                result.push(freq[num - 1]);
            }
        }
        return result;
    }
}
{
    let sol = new SmallestNumSolution();
    sol.countSmallerNumbers([8, 1, 2, 2, 3]);
    sol.countSmallerNumbers([6, 5, 4, 8]);
    sol.countSmallerNumbers([7, 7, 7, 7]);
}
