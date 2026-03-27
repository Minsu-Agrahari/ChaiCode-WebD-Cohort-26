/**
 * Problem: Even Difference Partitions
 * Count the number of partitions in an array where the difference 
 * between the sum of the left part and the right part is an even number.
 * 
 * Example:
 * Input: [10, 10, 3, 7, 6]
 * Output: 4
 */
class evenDiff {
  /**
   * Counts the number of partitions where the difference between the sum of the left part
   * and the sum of the right part is an even number.
   *
   * @param {number[]} nums - The input integer array.
   * @return {number} The count of valid partitions.
   */
  countEvenDifferencePartitions(nums: number[]) {
    // Your implementation here

    let preSum: number[] = [];
    let suffSum: number[] = [];

    const len: number = nums.length;

    // forward sum
    let sum: number = 0, 
        sum2: number = 0;

    for (let i = 0; i < len; i++) {
      sum += nums[i];
      sum2 += nums[len-i-1];
    
      preSum.push(sum);
      suffSum.push(sum2);
    }

    suffSum = suffSum.reverse();

    let count: number = 0;
    for(let i=0; i<len-1; i++){
        const diff: number = preSum[i] - suffSum[i+1];

        if(diff % 2 === 0){
            count++;
        }
    }
    
    console.log(count)
    return count;
  }
}

let sol = new evenDiff();
sol.countEvenDifferencePartitions([10, 10, 3, 7, 6]);
sol.countEvenDifferencePartitions([1, 2, 2]);
sol.countEvenDifferencePartitions([2, 4, 6, 8]);
