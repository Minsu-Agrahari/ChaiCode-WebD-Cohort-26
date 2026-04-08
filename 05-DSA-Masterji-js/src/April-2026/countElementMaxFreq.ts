function countMaximumFrequencyCandies(nums: number[]): number {
    // nums: array of positive integers
    // Returns the total frequencies of elements with the maximum frequency

    // map creation
    let map = new Map<number, number>();

    // 1. build a freq map
    for(let num of nums){
        map.set(num, (map.get(num) || 0 ) + 1);
    }

    // 2. find max freq
    let max: number = 0;
    for (let value of map.values()){
        if(value > max){
            max = value;
        }
    }

    // 3. Sum freq equal to max
    let total = 0;
    for(let value of map.values()){
        if(value === max){
            total += value;
        }
    }

    return total;
}

console.log(countMaximumFrequencyCandies([2, 5, 5, 3, 2, 6]));
