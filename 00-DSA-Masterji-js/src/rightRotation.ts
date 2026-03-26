/**
 * Problem: Right Rotation
 * Rotate the array to the right by k steps.
 * 
 * Example:
 * Input: nums = [-1, -100, 3, 99], k = 2
 * Output: [3, 99, -1, -100]
 */
class rightRotation {

    /**
     * Rotates the array to the right by k steps.
     * @param {number[]} nums - The input array of integers.
     * @param {number} k - Number of right rotations (non‑negative).
     * @return {number[]} The rotated array.
     */

    rotateArray(nums: number[], k: number): number[]{
        // Your implementation here
        
        let len = nums.length;

        // valideation 
        if(len === 0) return [];

        k = k % len;
        
        let a1 = nums.slice(len-k);
        let a2 = nums.slice(0, len-k);

        return [...a1, ...a2];
    }
}

let obj = new rightRotation();

console.log(obj.rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(obj.rotateArray([-1, -100, 3, 99], 2));


// ```
// Input: nums = [-1, -100, 3, 99], k = 2
// Output: [3, 99, -1, -100]
// Explanation:
// - After 1 step: [99, -1, -100, 3]
// - After 2 steps: [3, 99, -1, -100]
// ```