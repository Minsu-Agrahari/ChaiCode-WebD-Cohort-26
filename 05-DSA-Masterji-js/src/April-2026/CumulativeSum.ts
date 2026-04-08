function runningSum (nums: number[]): number[]{

    const len = nums.length; let top = 0;
    let result :number[] = [];
    result.push(nums[0]);

    for(let i=1; i<len; i++){
        const sum = nums[i] + result[top++];
        result.push(sum);
    }

    return result;
}

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
