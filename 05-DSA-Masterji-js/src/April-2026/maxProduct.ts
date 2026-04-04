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