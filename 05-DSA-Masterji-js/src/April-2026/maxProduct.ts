/**
 * Problem: Maximum Product of Two Elements in an Array
 * 
 * Description:
 * Given an array of integers representing flavored candies, find the maximum 
 * product of (nums[i] - 1) * (nums[j] - 1) where i and j are different indices.
 * 
 * What the code does:
 * It compares every candy with every other candy using two loops.
 * For each valid pair, it calculates the product of their values minus one, 
 * and keeps track of the maximum product found so far.
 * 
 * Example:
 * Input: [6, 9, 5, 3]
 * Output: 40
 * Explanation: The maximum product is (6 - 1) * (9 - 1) = 5 * 8 = 40.
 */
    function maximizeCandyFlavorMix(nums: number[]): number {

        // nums: an array of integers representing the flavored candies

        const len = nums.length;
        let maxVal = -Infinity;

        for(let i=0; i<len; i++){
            for(let j=0; j<len; j++){

                if(i != j){
                    let product = ((nums[i] - 1) * (nums[j] - 1));
                    maxVal = Math.max(maxVal, product);
                }
            }
        }
        return maxVal;
    }

    console.log(maximizeCandyFlavorMix([6,9,5,3]));
    console.log(maximizeCandyFlavorMix([2,8,4,8]));
    console.log(maximizeCandyFlavorMix([10, 12]));
    console.log(maximizeCandyFlavorMix([1, 2]));