"use strict";
/**
 * Problem: Interleave Array (Two Halves)
 * Interleave the two halves of an array of length 2n by alternating elements
 * from the first half and second half.
 *
 * Example:
 * Input: [2, 5, 1, 3, 4, 7], n = 3
 * Output: [2, 3, 5, 4, 1, 7]
 */
class twoHalves {
    /**
     * Interleaves two halves of the array.
     * @param {number[]} nums - The input array of length 2n.
     * @param {number} n - Half the length of the array.
     * @returns {number[]} The interleaved array.
     */
    interleaveArray(nums, n) {
        // Your implementation here
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(nums[i]);
            result.push(nums[i + n]);
            console.log("result => ", result);
        }
        return result;
    }
}
{
    let sol = new twoHalves();
    sol.interleaveArray([2, 5, 1, 3, 4, 7], 3);
    sol.interleaveArray([1, 2, 3, 4, 4, 3, 2, 1], 4);
    sol.interleaveArray([1, 1, 2, 2], 2);
}
